import React from 'react'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Info from './components/Info'
import Notifications from './components/Notifications'
import Profile from './components/Profile'
import Footer from './components/Footer'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'

const AppWrapper = styled.div`
  box-sizing: border-box;
`

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Navbar />
        <div className="container" style={{ marginTop: '165px' }} />
        <Switch>
          <Route exact path={['/home', '/']} component={Home} />
          <Route exact path={'/info'} component={Info} />
          <Route exact path={'/notifications'} component={Notifications} />
          <Route exact path={'/profile'} component={Profile} />
          <Route exact path={'/logout'} component={Landing} />
        </Switch>
        <Footer />
      </AppWrapper>
    </BrowserRouter>
  )
}

export default App
