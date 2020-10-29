import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyles } from 'twin.macro'

import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
   <>
      <GlobalStyles />
      <App />
   </>,
   rootElement
)