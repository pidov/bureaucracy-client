import React, { Component } from 'react'
import { ProtectedRoute } from './auth/auth'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

const Public = () => 'Public'
const Protected = () => 'Protected'

class AuthExample extends Component  {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/public">Public Page</Link></li>
            <li><Link to="/protected">Protected Page</Link></li>
          </ul>
          <Route path="/public" component={Public}/>
          <ProtectedRoute isAllowed={false} path="/protected" component={Protected}/>
        </div>
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
