import React, { useState } from 'react'

const URL = 'http://localhost:8080/users'

export const App = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.log('error:', err))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <label>
          name
          <input
            required
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </label>
        <label>
          email
          <input
            required
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </label>
        <label>
          password
          <input
            required
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          SIGN UP
          </button>
      </form>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          <label>
            name
          <input
              required
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </label>
          <label>
            email
          <input
              required
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </label>
          <label>
            password
          <input
              required
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </label>
          <button type="submit" onClick={handleSubmit}>
            SIGN UP
          </button>
        </form>
      </div>
    </div>

  )
}
