import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

export class ProtectedRoute extends Component {
  render () {
    const { props } = this
    const { component: Component, isAuthorized, ...rest } = props

    return (
      <Route {...rest} render={props => (
        isAuthorized ? (
          <Component {...props}/>
        ) : (
          <Redirect to={{
            pathname: '/login',
            state: { 
              from: props.path 
            }
          }}/>
        )
      )}/>
    )
  }
}