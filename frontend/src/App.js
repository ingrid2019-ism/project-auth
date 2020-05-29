import React from 'react'

import Login from './components/Login'
import MemberPage from './components/MemberPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Registration from './components/Registration' // Van´s LoginForm

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* route for signing up new member and logging in excisting member  */}
        <Route path='/' exact>

          <div className='authContainer'>
            <Registration />
            <Login />
          </div>
        </Route>
        {/* Route for memberpage   */}
        <Route path='/MemberPage'>
          <MemberPage />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}