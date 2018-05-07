import createReducer from '../lib/create-reducer'

const initialState = {
  count: 0
}

export default createReducer(initialState, {
  HOME_INCREMENT_COUNT: (state) => ({
    ...state,
    count: state.count + 1
  })
})
