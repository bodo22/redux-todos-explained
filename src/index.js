// default import:
import React from 'react'
// named import:
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
// cheatsheet for es5 / es6 imports / exports
// https://medium.com/podiihq/es6-modules-imports-and-exports-1e5b552ddca9

// with the redux devtools extension
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// without the redux devtools extension
// const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
