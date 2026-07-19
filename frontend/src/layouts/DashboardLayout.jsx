import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import DashboardNavbar from '../components/DashboardNavbar'
import { useTheme } from '../context/ThemeContext'

const DashboardLayout = () => {
  const { isDark } = useTheme()
  return (
    <div
      className="min-h-screen flex"
      style={{
        background: isDark ? '#0f0a1e' : '#f0ecff',
        backgroundImage: isDark
          ? 'radial-gradient(at 20% 20%, rgba(124,77,255,0.10) 0, transparent 55%), radial-gradient(at 80% 0%, rgba(196,78,240,0.07) 0, transparent 50%)'
          : 'radial-gradient(at 15% 15%, rgba(160,100,255,0.20) 0, transparent 50%), radial-gradient(at 85% 5%, rgba(196,78,240,0.13) 0, transparent 45%), radial-gradient(at 5% 85%, rgba(99,60,230,0.11) 0, transparent 45%), radial-gradient(at 90% 90%, rgba(124,77,255,0.09) 0, transparent 45%)',
      }}
    >
      <Sidebar />
      <div className="flex-1 flex flex-col ml-0 lg:ml-64 transition-all duration-300 min-h-screen">
        <DashboardNavbar />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
