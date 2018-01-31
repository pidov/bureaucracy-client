import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route, Redirect, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'

import { ProtectedRoute, LoginPage } from './auth'
import { LoAPage } from './loa'
import { Dashboard } from './Dashboard'
import configureStore from './store/createStore'

import './styles/index.css'
import 'antd/dist/antd.css'  // or 'antd/dist/antd.less'

const history = createHistory()
const store = configureStore(history)

const NotFound = () => 'NotFound'

class AuthExample extends Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history} >
          <Switch>
            <Route exact path='/'>
              <Redirect to='/loa' />
            </Route>
            <ProtectedRoute path='/loa' redirectTo='/login' layout={Dashboard} component={LoAPage} />
            <Route path='/login' component={LoginPage} />
            <Route component={NotFound} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    )
  }
}

class App extends Component {
  render () {
    return (
      <AuthExample />
    )
  }
}

export default App
