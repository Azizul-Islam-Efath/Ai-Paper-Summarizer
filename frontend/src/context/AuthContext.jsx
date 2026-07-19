import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { authAPI } from '../services/authService'
import toast from 'react-hot-toast'

const AuthContext = createContext(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const checkAuth = useCallback(async () => {
    const token = localStorage.getItem('accessToken')
    if (!token) {
      setLoading(false)
      return
    }

    try {
      const response = await authAPI.me()
      setUser(response.data.data)
      setIsAuthenticated(true)
    } catch {
      localStorage.removeItem('accessToken')
      setUser(null)
      setIsAuthenticated(false)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  const login = async (email, password) => {
    const response = await authAPI.login({ email, password })
    const { accessToken, user: userData } = response.data.data
    localStorage.setItem('accessToken', accessToken)
    setUser(userData)
    setIsAuthenticated(true)
    toast.success('Welcome back!')
    return userData
  }

  const register = async (name, email, password) => {
    const response = await authAPI.register({ name, email, password })
    const { accessToken, user: userData } = response.data.data
    localStorage.setItem('accessToken', accessToken)
    setUser(userData)
    setIsAuthenticated(true)
    toast.success('Account created successfully!')
    return userData
  }

  const logout = async () => {
    try {
      await authAPI.logout()
    } finally {
      localStorage.removeItem('accessToken')
      setUser(null)
      setIsAuthenticated(false)
      toast.success('Logged out successfully')
    }
  }

  const updateUser = (updatedUser) => {
    setUser((prev) => ({ ...prev, ...updatedUser }))
  }

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    register,
    logout,
    updateUser,
    checkAuth,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
