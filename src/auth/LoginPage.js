import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { actions, selectors } from './auth'
import { LoginForm } from './LoginForm'

export class LoginPageNormal extends Component {
  render () {
    const { isAuthorized, loginFormError } = this.props
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    return (
      <div style={{height: '100%'}}>
        <LoginForm onSubmit={this.props.LOG_IN} formError={loginFormError} />
        {isAuthorized && <Redirect to={from} />}
      </div>
    )
  }
}

export const LoginPage = connect(
  state => ({
    isAuthorized: selectors.isAuthorized(state),
    loginFormError: selectors.loginFormError(state)
  }),
  dispatch => ({
    ...bindActionCreators(actions, dispatch)
  })
)(LoginPageNormal)
