import createReducer from '../lib/create-reducer'

const initialState = {
  loading: true,
  tracks: [],
  details: {}
}

export default createReducer(initialState, {
  CHART_UPDATE_LOADING: (state, { loading }) => ({
    ...state,
    loading
  }),
  CHART_SET_CHARTS: (state, { tracks, details }) => ({
    ...state,
    details,
    tracks,
    loading: false,
    error: false
  }),
  CHART_SET_ERROR: (state, { error }) => ({
    ...state,
    error
  })
})
