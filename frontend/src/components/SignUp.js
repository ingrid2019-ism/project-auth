import React, { useState } from 'react'

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
    <section>
      <form onSubmit={handleFormSubmit} >
        <h1><strong>Sign up</strong></h1>
        <h4>Enter your contact information below</h4>
        <div>
          <label>Name </label>
          <input value={name} placeholder='Enter Name' type='text' name='name' onChange={event => setName(event.target.value)} required></input>
          <br />
          <br />
          <label >Email </label>
          <input value={email} placeholder='Enter Email' type='email' name='email' onChange={event => setEmail(event.target.value)} required></input>
          <br />
          <br />
          <label>Password </label>
          <input value={password} placeholder='Enter Password' type='password' name='password' onChange={event => setPassword(event.target.value)} required>
          </input>
          {errorMessage && <div>  <br />{errorMessage} </div>}
          {successMessage && <div> <br />{successMessage} </div>}
          <br />
          <br />
          <button onClick={handleFormSubmit} type="submit" >Submit</button>

        </div>
      </form>
    </section >
  )

}

