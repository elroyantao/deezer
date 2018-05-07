import { callApi } from '../lib/api-helper'

export const updateLoading = (loading) => ({
  type: 'CHART_UPDATE_LOADING',
  loading
})

export const setChartError = (error) => ({
  type: 'CHART_SET_ERROR',
  error
})

export const setCharts = (charts) => ({
  type: 'CHART_SET_CHARTS',
  ...charts
})

export const getCharts = () => (dispatch, getState) => {
  dispatch(updateLoading(true))
  fetchCharts()
    .then((charts) => dispatch(setCharts(charts)))
    .catch(() => dispatch(setChartError(true)))
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
