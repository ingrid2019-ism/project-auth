import React, { useState } from 'react'
import { useHistory } from 'react-router'

const URL = process.env.REACT_APP_API_URL || 'https://express-deploying.herokuapp.com/sessions'

export const LogIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState(null)
  const history = useHistory()

  // To log in an exicting user
  const handleFormSubmit = event => {
    event.preventDefault()

    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        else {
          return res.text().then(json => { throw new Error(json) })
        }
      })
      .then(user => {
        if (user['message']) {
          setErrorMsg(user.message)
        }
        else {
          window.localStorage.setItem('userId', user.userId)
          window.localStorage.setItem('accessToken', user.accessToken)
          //window.location.href = '/Profile'
          history.push('/Profile')
        }
      })
      .catch(err => console.log('error:', err))
  }

  // If user is logged out, show login form
  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        <h1><strong>Log in</strong></h1>
        <h4>Enter your login details here </h4>
        <div>
          <label >Email  </label>
          <input value={email} placeholder='Enter Email' type='email' name='email' onChange={event => { setEmail(event.target.value) }} required></input>
          <br />
          <br />
          <label>Password </label>
          <input value={password} placeholder='Enter Password' type='password' name='password' onChange={event => { setPassword(event.target.value) }} required>
          </input>
          <br />
          <br />
          {errorMsg && <div> {errorMsg} </div>}
          <button onClick={handleFormSubmit} type="submit">Login</button>
        </div>
      </form>
    </section>
  )
}

