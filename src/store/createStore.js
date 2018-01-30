import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { stateTransformer } from 'redux-seamless-immutable'
import rootReducer from './reducer'

export default history => {
  let middlewares = []
  let enhancers = []

  middlewares.push(routerMiddleware(history))

  if ( /* process.env.NODE_ENV === `development` */ true) {
    const { createLogger } = require(`redux-logger`)
    const logger = createLogger({ stateTransformer })
    middlewares.push(logger)
  }

  enhancers.push(applyMiddleware(...middlewares))

  if (window.devToolsExtension) {
    enhancers.push(window.devToolsExtension())
  }

  const storeEnhancers = compose(...enhancers)
  const store = createStore(rootReducer, storeEnhancers)

  return store
}
