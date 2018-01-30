import { combineReducers, routerReducer } from 'redux-seamless-immutable'
import auth from '../auth/auth'

export default combineReducers({
  routing: routerReducer,
  auth
})
