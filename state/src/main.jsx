import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const title = 'Hello React State'

ReactDOM.render(
  <App title={title} />,
  document.getElementById('root')
)
