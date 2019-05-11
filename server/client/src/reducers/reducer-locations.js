import {
  FETCH_LOCATIONS,
  CONVERT_ADDRESS,
  CONVERT_COORDINATES
} from '../actions'

const initialState = []
export const locationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS:
      return {
        ...state,
        locations: action.payload.data
      }
    case CONVERT_COORDINATES:
      return {
        ...state,
        address: action.payload.data
      }
    case CONVERT_ADDRESS:
      return {
        ...state,
        coordinates: action.payload.data
      }
    default:
      return state
  }
}

export default locationsReducer
