import React from 'react'

import { Container } from './styles'
import { useLayout } from './context'
import { Navbar, Sidebar, Footer, Main } from './sections'

const App = () => {
   const { state } = useLayout()
   return (
      <Container sidebar={state.sidebar}>
         <Navbar />
         <Sidebar />
         <Main />
         <Footer />
      </Container>
   )
}

export default App
