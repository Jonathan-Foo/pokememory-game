import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Border from './components/Border'
import Main from './components/Main'
import styled from 'styled-components'



const App = () => {
  return (
    <AppWrapper>
      <Header/>
      <Border />
      <Main />
      <Footer/>  
    </AppWrapper>
  )
}

export default App;

const AppWrapper = styled.div`
  position: relative;
  min-height: 100vh;
 
`