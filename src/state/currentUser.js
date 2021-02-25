import { useCallback, useState } from 'react'
import useAsync from 'react-use/lib/useAsync'
import constate from 'constate'

async function fetchCurrentUser() {
  const res = await fetch(process.env.REACT_APP_API_URL+"/me")
  return await res.json()
}

const _useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null)

  const logout = useCallback(() => setCurrentUser(null), [])

  useAsync(async () => {
    const user = await fetchCurrentUser()
    if (user) {
      setCurrentUser(user)
    }
  }, [])

  return {
    currentUser,
    isLoggedIn: !!currentUser,
    logout,
    setCurrentUser,
  }
}

export const [CurrentUserProvider, useCurrentUser] = constate(_useCurrentUser)