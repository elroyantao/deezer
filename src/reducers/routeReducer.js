import { LOCATION_CHANGE } from 'react-router-redux'

import createReducer from '../lib/create-reducer'

const initialState = {
  location: null
}

export default createReducer(initialState, {
  [LOCATION_CHANGE]: (state, { payload }) => ({
    ...state,
    location: payload
  })
})
