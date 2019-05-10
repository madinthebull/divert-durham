import { FETCH_LOCATIONS } from '../actions'

const initialState = {}
export const locationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS:
      return {
        ...state,
        locations: action.payload.data
      }
    default:
      return state
  }
}

export default locationsReducer
