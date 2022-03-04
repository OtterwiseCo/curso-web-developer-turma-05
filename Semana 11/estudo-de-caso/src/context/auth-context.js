import { createContext, useContext, useState } from 'react'
import { authProvider } from '../providers/auth'
import { useLocation, Navigate } from 'react-router-dom'

const AuthContext = createContext(null)

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null)

  const login = (data, callback) => {
    authProvider.signin(data, (user) => {
      setUser(user)
      callback()
    })
  }
  const logout = (callback) => {
    authProvider.signout(() => {
      setUser(null)
      callback()
    })
  }

  return <AuthContext.Provider value={{ user, login, logout }} {...props} />
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export const RequireAuth = ({ children }) => {
  const auth = useAuth()
  const location = useLocation()

  if (!auth.user?.token) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return children
}
