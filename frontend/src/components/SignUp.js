import React, { useState } from 'react'
import { Container, Title, Content, InputField, Button } from './StyledComponents'

const URL = process.env.REACT_APP_API_URL || 'https://express-deploying.herokuapp.com/users'

export const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  const handleFormSubmit = event => {
    event.preventDefault()
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        if (res.ok) {
          setSuccessMessage('User created!') // set success message
          setErrorMessage(false) // set error message to false
          return res.json()
        }
        else {
          setErrorMessage('could not create user') // set error message
          setSuccessMessage(false) // set success message to false
          return res.text().then(json => { throw new Error(json) })
        }
      })
      .then(user => console.log('created user:', user))
      .catch(err => { console.error(err) })
  };
  // if user is logged out, show login  
  return (
    <Container>
      <form onSubmit={handleFormSubmit} >
        <Title>Welcome</Title>
        <Title>Sign Up</Title>
        <Content>
          <InputField
            value={name}
            placeholder='Enter Name'
            type='text'
            name='name'
            onChange={event => setName(event.target.value)}
            required
          />
          <InputField
            value={email}
            placeholder='Enter Email'
            type='email'
            name='email'
            onChange={event => setEmail(event.target.value)}
            required
          />
          <InputField
            value={password}
            placeholder='Enter Password'
            type='password'
            name='password'
            onChange={event => setPassword(event.target.value)}
            required
          />
          {errorMessage && <div>  <br />{errorMessage} </div>}
          {successMessage && <div> <br />{successMessage} </div>}
          <br />
          <Button onClick={handleFormSubmit} type="submit" >Submit</Button>
        </Content>
      </form>
    </Container >
  )
}