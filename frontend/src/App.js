import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { LogIn } from './components/LogIn'
import { Profile } from './components/Profile'
import { SignUp } from './components/SignUp'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* this route for signing up new user and logging in user  */}
        <Route path='/' exact>
          <div>
            <SignUp />
            <LogIn />
          </div>
        </Route>
        {/* Route for profile   */}
        <Route path='/Profile'>
          <Profile />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}