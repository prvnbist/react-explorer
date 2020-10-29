import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyles } from 'twin.macro'

import './global.css'
import App from './App'
import { LayoutProvider } from './context'

const rootElement = document.getElementById('root')
ReactDOM.render(
   <LayoutProvider>
      <GlobalStyles />
      <App />
   </LayoutProvider>,
   rootElement
)
