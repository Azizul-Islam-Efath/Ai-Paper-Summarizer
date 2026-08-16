import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import LoadingSpinner from '../components/LoadingSpinner'

const PublicRoute = () => {
  const { isAuthenticated, loading } = useAuth()
  const location = useLocation()

  // Allow share links even when not authenticated
  if (location.pathname.startsWith('/share/')) {
    return <Outlet />
  }

  if (loading) {
    return <LoadingSpinner fullScreen />
  }

  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />
}

export default PublicRoute
