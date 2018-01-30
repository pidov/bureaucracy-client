import { createActions } from './../util'
import { handleActions } from 'redux-actions'
import { createSelector } from 'reselect'
import Immutable from 'seamless-immutable'

export const types = {
  LOGIN: 'auth/LOGIN',
  LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
  LOGIN_ERROR: 'auth/LOGIN_ERROR'
}

export const actions = createActions(types)

export const initialState = {
  isAuthenticated: false, // !!localStorage.getItem('token'),
  isFetching: false,
  errorMessage: ''
}

export default handleActions({
  [types.LOGIN_SUCCESS]: (state) => {
    return state.merge({
      isAuthenticated: true,
      isFetching: false,
      errorMessage: ''
    })
  },
  [types.LOGIN]: (state) => {
    return state.merge({
      isFetching: true
    })
  },
  [types.LOGIN_ERROR]: (state, {payload}) => {
    return state.merge({
      isAuthenticated: false,
      isFetching: false,
      errorMessage: payload.message
    })
  }
}, Immutable(initialState))

const authSelector = state => state.auth

export const selectors = {
  isAuthorized: createSelector(
    authSelector,
    auth => auth.isAuthenticated
  )
}
