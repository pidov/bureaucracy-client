import React, { Component } from 'react'
import { LoginForm } from './LoginForm'

export class LoginPage extends Component {
  render() {
    return (
      <LoginForm onSubmit={values => console.log(values)} />
    );
  }
}