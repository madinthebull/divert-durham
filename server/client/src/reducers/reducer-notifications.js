import { FETCH_NOTIFICATIONS } from '../actions'

const initialState = []
export const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload.data
      }
    default:
      return state
  }
}

export default notificationsReducer
