// middleware/api.js
function throwResponseError (response) {
  return response.json().then(json => {
    const error = new Error(json.message)
    error.response = response
    throw error
  })
}

function throwErrorOnNon200StatusCode (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    return throwResponseError(response)
  }
}

const wrappedFetch = (url, options = {}) => {
  return fetch(url, options)
    .then(throwErrorOnNon200StatusCode)
    .then(response => response.json())
    .catch(e => {
      console.log(e)
      throw e
    })
}

export default class Api {
  static requestHeaders () {
    return {'AUTHORIZATION': `Bearer ${localStorage.get('token')}`}
  }

  static authorize (credentials) {
    return wrappedFetch('http://localhost:5000/login', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
  }

  static requestLeave () {
    const headers = this.requestHeaders()
    return fetch('http://localhost:5000/holidays', {
      method: 'POST',
      headers
    })
    .then(response => response.json())
    .catch(err => err)
  }
}
