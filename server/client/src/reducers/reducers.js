import { combineReducers } from 'redux'
import NotificationsReducer from './reducer-notifications'

const rootReducer = combineReducers({
  products: NotificationsReducer
})

export default rootReducer
