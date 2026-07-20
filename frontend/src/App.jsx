import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import LoadingSpinner from './components/LoadingSpinner'
import Layout from './layouts/Layout'
import DashboardLayout from './layouts/DashboardLayout'
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'

// Lazy load pages for code splitting
const LandingPage = lazy(() => import('./pages/LandingPage'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const ResetPassword = lazy(() => import('./pages/ResetPassword'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const Upload = lazy(() => import('./pages/Upload'))
const Papers = lazy(() => import('./pages/Papers'))
const PaperDetail = lazy(() => import('./pages/PaperDetail'))
const SummaryView = lazy(() => import('./pages/SummaryView'))
const GeneratedPaper = lazy(() => import('./pages/GeneratedPaper'))
const Profile = lazy(() => import('./pages/Profile'))
const Settings = lazy(() => import('./pages/Settings'))
const SharedSummary = lazy(() => import('./pages/SharedSummary'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner fullScreen />}>
        <AnimatePresence mode="wait">
          <Routes>
            {/* Public routes */}
            <Route element={<PublicRoute />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password/:token" element={<ResetPassword />} />
              <Route path="/share/:token" element={<SharedSummary />} />
            </Route>

            {/* Protected routes */}
            <Route element={<PrivateRoute />}>
              <Route element={<DashboardLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/projects" element={<Projects />} />
                <Route path="/dashboard/projects/:id" element={<ProjectDetail />} />
                <Route path="/dashboard/upload" element={<Upload />} />
                <Route path="/dashboard/papers" element={<Papers />} />
                <Route path="/dashboard/papers/:id" element={<PaperDetail />} />
                <Route path="/dashboard/summaries/:id" element={<SummaryView />} />
                <Route path="/dashboard/generator/:id" element={<GeneratedPaper />} />
                <Route path="/dashboard/profile" element={<Profile />} />
                <Route path="/dashboard/settings" element={<Settings />} />
              </Route>
            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Analytics />
    </>
  )
}

export default App
