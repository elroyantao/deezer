import { callApi } from '../lib/api-helper'
import { mapArrayToObject } from '../lib/general-helpers'

export const updateLoading = (loading) => ({
  type: 'CHART_UPDATE_LOADING',
  loading
})

export const setChartError = (error) => ({
  type: 'CHART_SET_ERROR',
  error
})

export const setCharts = (chartData) => ({
  type: 'CHART_SET_CHARTS',
  ...chartData
})

export function getCharts() {
  return async function (dispatch, getState) {
    dispatch(updateLoading(true))
    try {
      const chart = await fetchCharts()
      // fetch only first 20 as deezer.com has a limit on fetches
      const top20 = chart.tracks.slice(0, 20)
      const { tracks, genres } = await fetchTrackAlbums(top20)

      dispatch(setCharts({
        details: chart.details,
        tracks,
        genres
      }))
    } catch(e) {
      dispatch(setChartError(true))
    }
  }
}


export const fetchCharts = () => {
  return callApi('http://localhost:3000/api/playlist/1111142221')
    .then(({ tracks: { data: tracks }, error, ...details }) => {
      if (error) return Promise.reject(error)
      return {
        tracks,
        details
      }
    })
}

export const fetchTrackAlbums = (tracks) => {
  const promises = tracks.map((track) => {
    return fetchTrackAlbum(track)
  })
  return Promise.all(promises)
    .then((resolvedTracks) => {
      const initresult = {
        tracks: [],
        genres: {}
      }
      return resolvedTracks.reduce((result, { track, genres }) => ({
        tracks: [ ...result.tracks, track ],
        genres: { ...result.genres, ...genres }
      }), initresult)
    })
}

export const fetchTrackAlbum = (track) => {
  const albumUrl = `http://localhost:3000/api/album/${track.album.id}`
  return callApi(albumUrl)
    .then(({ genres, error }) => {
      if (error) return Promise.reject(error)
      return {
        track: {
          ...track,
          genresId: genres.data.map(genre => genre.id)
        },
        genres: mapArrayToObject(genres.data, 'id')
      }
    })
}
