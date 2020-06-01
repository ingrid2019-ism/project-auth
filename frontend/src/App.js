import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { LogIn } from './components/LogIn'
import { Profile } from './components/Profile'
import { SignUp } from './components/SignUp'
import { MainContainer } from './components/StyledComponents'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* route for signing up new user and logging in user  */}
        <Route path='/' exact>
          <MainContainer>
            <SignUp />
            <LogIn />
          </MainContainer>
        </Route>
        {/* Route for profile   */}
        <Route path='/Profile'>
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}