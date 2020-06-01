import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Container, Title, Content, InputField, Button } from './StyledComponents'

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
    <Container>
      <form onSubmit={handleFormSubmit}>
        <Title>Hey You</Title>
        <Title>Welcome Back</Title>
        <Content>
          <InputField
            value={email}
            placeholder='Enter Email'
            type='email'
            name='email'
            onChange={event => { setEmail(event.target.value) }}
            required
          />
          <InputField value={password}
            placeholder='Enter Password'
            type='password'
            name='password'
            onChange={event => { setPassword(event.target.value) }}
            required
          />
          {errorMsg && <div> {errorMsg} </div>}
          <Button onClick={handleFormSubmit}
            type="submit"
          >Login
          </Button>
        </Content>
      </form>
    </Container>
  )
}

