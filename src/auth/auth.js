import { createActions } from './../util'
import { handleActions } from 'redux-actions'
import { createSelector } from 'reselect'
import Immutable from 'seamless-immutable'

export const types = {
  LOG_IN: 'auth/LOG_IN',
  LOG_IN_SUCCESS: 'auth/LOG_IN_SUCCESS',
  LOG_IN_ERROR: 'auth/LOG_IN_ERROR',
  LOG_OUT: 'auth/LOG_OUT',
  RESET: 'auth/RESET'
}

export const actions = createActions(types)

export const initialState = {
  isAuthenticated: !!localStorage.getItem('token'),
  isFetching: false,
  errorMessage: ''
}

export default handleActions({
  [types.LOG_IN]: (state) => {
    return state.merge({
      isAuthenticated: false,
      isFetching: true,
      errorMessage: ''
    })
  },
  [types.LOG_IN_SUCCESS]: (state) => {
    return state.merge({
      isAuthenticated: true,
      isFetching: false,
      errorMessage: ''
    })
  },
  [types.LOG_IN_ERROR]: (state, {payload}) => {
    return state.merge({
      isAuthenticated: false,
      isFetching: false,
      errorMessage: payload.message
    })
  },
  [types.LOG_OUT]: (state) => {
    return state.merge({
      isFetching: false,
      isAuthenticated: false,
      errorMessage: ''
    })
  },
  [types.RESET]: (state) => {
    return state.merge({
      isFetching: false,
      isAuthenticated: false,
      errorMessage: ''
    })
  }
}, Immutable(initialState))

const authSelector = state => state.auth

export const selectors = {
  isAuthorized: createSelector(
    authSelector,
    auth => auth.isAuthenticated
  ),
  loginFormError: createSelector(
    authSelector,
    auth => auth.errorMessage
  )
}
