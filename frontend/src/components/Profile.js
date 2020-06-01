import React, { useState, useEffect } from 'react'

const URL = process.env.REACT_APP_API_URL || 'https://express-deploying.herokuapp.com/users'

export const Profile = () => {
  const accessToken = window.localStorage.getItem('accessToken')
  const userId = window.localStorage.getItem('userId')
  const [authorized, setAuthorized] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch(`${URL}/${userId}`, {
      method: 'GET',
      headers: {
        Authorization: accessToken
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.json())
        }
      })
      .then(user => {
        setUser(user)
        setAuthorized(true)
      })
      .catch(err => {
        console.log('ERROR', err)
      })
  }, [userId, accessToken])

  const handleLogOut = () => {
    window.location.href = '/' //return to start page
    window.localStorage.clear() // clears data
  }

  return (
    <div>
      {/* if authorized show this section */}
      {authorized &&
        <section >
          <h3>Profile information</h3>
          <h2>Welcome {user.name}</h2>
          <h3>This is your secret page</h3>
          <div>
            <button id='logout' onClick={() => handleLogOut()} type='button'>
              Log Out
          </button>
          </div>
        </section>
      }
      {!authorized && <div> You are not authorized! </div>}
    </div>

  )
}

