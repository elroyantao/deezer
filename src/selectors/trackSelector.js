export const getFilteredTracks = (state) => {
  return state.charts.tracks.filter((track) => {
    const selectedGenre = state.genres.selected
    return selectedGenre > 0 ? track.genresId.includes(selectedGenre) : true
  })
}
