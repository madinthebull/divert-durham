import { FETCH_NOTIFICATIONS, SEND_NOTIFICATION } from '../actions'

const initialState = []
export const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload.data
      }
    case SEND_NOTIFICATION:
      return {
        ...state,
        sendNotification: action.payload.data
      }
    default:
      return state
  }
}

export default notificationsReducer
