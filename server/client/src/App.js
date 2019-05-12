import React from 'react'
import Landing from './components/Landing'
import JoinForm from './components/JoinForm'
import Login from './components/Login'
import Home from './components/Home'
import Info from './components/Info'
import Notifications from './components/Notifications'
import Profile from './components/Profile'

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
        <div className="container" />
        <Switch>
          <Route exact path={'/'} component={Landing} />
          <Route exact path={'/home'} component={Home} />
          <Route exact path={'/info'} component={Info} />
          <Route exact path={'/notifications'} component={Notifications} />
          <Route exact path={'/profile'} component={Profile} />
          <Route exact path={'/logout'} component={Landing} />
          <Route exact path={'/login'} component={Login} />
          <Route exact path={'/join'} component={JoinForm} />
        </Switch>
      </AppWrapper>
    </BrowserRouter>
  )
}

export default App
