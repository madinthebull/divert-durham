import { combineReducers } from 'redux'
import NotificationsReducer from './reducer-notifications'
import LocationsReducer from './reducer-locations'
import UsersReducer from './reducer-users'

const rootReducer = combineReducers({
  notifications: NotificationsReducer,
  locations: LocationsReducer,
  user: UsersReducer
})

export default rootReducer
