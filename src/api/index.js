import { callApi } from './fetch'

export default class Api {
  static authorize (credentials) {
    return callApi('http://localhost:5000/api/authorize', {
      method: 'POST',
      body: JSON.stringify(credentials)
    }, false)
  }

  static requestLeave () {
    return callApi('http://localhost:5000/holidays', {
      method: 'POST'
    })
  }
}
