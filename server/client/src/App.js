import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
// import theme from './theme/globalStyle'

const AppWrapper = styled.div`
  box-sizing: border-box;
`

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Navbar />
        <div className="container" />
        <Switch>
          <Route exact path={['/home', '/']} component={Home} />
          {/* <Route exact path={['/info']} component={Info} />
          <Route exact path={['/info']} component={Notifications} />
          <Route exact path={['/info']} component={Profile} /> */}
        </Switch>
      </AppWrapper>
    </BrowserRouter>
  )
}

export default App
