import createReducer from '../lib/create-reducer'

const initialState = {
  list: {},
  selected: 0
}

export default createReducer(initialState, {
  CHART_SET_CHARTS: (state, { genres }) => ({
    ...state,
    list: {
      ...state.list,
      ...genres
    }
  }),
  GENRE_SET_SELECTED: (state, { id }) => ({
    ...state,
    selected: id
  })
})
