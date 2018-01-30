import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectors } from './auth'

class ProtectedRouteNormal extends Component {
  render () {
    const { props } = this
    const { component: Component, isAuthorized, redirectTo, ...rest } = props

    return (
      <Route {...rest} render={routeProps => (
        isAuthorized ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to={{
            pathname: redirectTo,
            state: { from: routeProps.location }
          }} />
        )
      )} />
    )
  }
}

export const ProtectedRoute = connect(
  state => ({
    isAuthorized: selectors.isAuthorized(state)
  })
)(ProtectedRouteNormal)
