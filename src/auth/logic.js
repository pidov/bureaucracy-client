import { createLogic } from 'redux-logic'
import { types } from './auth'
import Api from '../api'

const validationLogic = createLogic({
  type: types.LOGIN,
  process ({ getState, action }, dispatch, done) {
    Api.authorize(action.payload)
      .then(({token}) => {
        console.log(token)
        localStorage.setItem('token', token)
        dispatch({
          type: types.LOGIN_SUCCESS,
          payload: token
        })
      })
      .catch(error => {
        dispatch({
          type: types.LOGIN_ERROR,
          payload: error
        })
      })
      .then(done)
  }
})

// const vacationRequestLogic = createLogic({
//   type: types.TEST,
//   process ({ getState, action }, dispatch, done) {
//     Api.requestLeave()
//       .then(response => console.log(response))
//       .catch(console.error)
//       .then(done())
//   }
// })

// pollsLogic
export default [
  validationLogic
  // vacationRequestLogic
]
