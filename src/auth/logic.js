import { createLogic } from 'redux-logic'
import { types } from './auth'
import Api from '../api'

const logInLogic = createLogic({
  type: types.LOG_IN,
  process ({ getState, action }, dispatch, done) {
    Api.authorize(action.payload)
      .then(({token}) => {
        localStorage.setItem('token', token)
        dispatch({
          type: types.LOG_IN_SUCCESS,
          payload: token
        })
      })
      .catch(error => {
        dispatch({
          type: types.LOG_IN_ERROR,
          payload: error
        })
      })
      .then(done)
  }
})

const logOutLogic = createLogic({
  type: types.LOG_OUT,
  process ({ getState, action }, dispatch, done) {
    localStorage.removeItem('token')
    done()
  }
})

// pollsLogic
export default [
  logInLogic,
  logOutLogic
]
