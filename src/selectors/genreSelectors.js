export const getGenreForTrack = (genres, track) => {
  return track.genresId.map((id) => genres[id])
}
