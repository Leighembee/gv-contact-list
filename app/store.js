import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunkMiddleware, loggingMiddleware))
