import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css'
import Counter from './containers/Counter'
import registerServiceWorker from './registerServiceWorker'
import rootReducer from './reducers'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
