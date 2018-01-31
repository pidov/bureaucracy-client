const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const getHeaders = (withCredentials = true) => withCredentials ? {
  ...defaultHeaders,
  'Authorization': `Bearer ${localStorage.get('token')}`
} : defaultHeaders

const throwOnNon200StatusCode = response => response.status >= 200 && response.status < 300 ? response : throwResponseError(response)

const throwResponseError = response => {
  return response.json().then(json => {
    const error = new Error(json.message)
    error.response = response
    throw error
  })
}

export const callApi = (url, options, withCredentials = true) => {
  const finalOptions = {
    headers: getHeaders(withCredentials),
    mode: 'cors',
    ...options
  }
  return fetch(url, finalOptions)
    .then(throwOnNon200StatusCode)
    .then(response => response.json())
    .catch(e => {
      console.log(e)
      throw e
    })
}
