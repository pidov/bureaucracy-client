import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { createLogicMiddleware } from 'redux-logic';
import { stateTransformer } from 'redux-seamless-immutable'
import rootReducer from './reducer'
import arrLogic from './logic'

export default history => {
  let middlewares = []
  let enhancers = []

  middlewares.push(routerMiddleware(history))
  middlewares.push(createLogicMiddleware(arrLogic))

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
