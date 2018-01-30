import React, { Component } from 'react'
import { ProtectedRoute, LoginPage } from './auth'
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

import './styles/index.css'
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

const Dashboard = () => 'Dashboard'
const Protected = () => 'Protected'
const NotFound = () => 'NotFound'

class AuthExample extends Component  {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard"/>
          </Route>
          <Route path="/login" component={LoginPage}/>
          <ProtectedRoute path="/dashboard" component={Dashboard}/>
          <ProtectedRoute path="/protected" component={Protected}/>
          <Route component={NotFound} /> 
        </Switch>
      </Router>
    )
  }
}

class App extends Component {
  render() {
    return (
      <AuthExample />
    )
  }
}

export default App
