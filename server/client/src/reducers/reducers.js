import { combineReducers } from 'redux'
import NotificationsReducer from './reducer-notifications'
import LocationsReducer from './reducer-locations'

const rootReducer = combineReducers({
  notifications: NotificationsReducer,
  locations: LocationsReducer
})

export default rootReducer
