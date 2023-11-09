import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import './styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

const rootView = document.getElementById('root')

if (rootView) {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
         <BrowserRouter>
            <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    rootView
  )
}
