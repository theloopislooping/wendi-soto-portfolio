import { Routes, Route, useLocation } from 'react-router'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import PortalPage from './pages/PortalPage'
import HomePage from './pages/HomePage'
import BridgetOS from './pages/BridgetOS'
import Aegis from './pages/Aegis'
import RecursiveThinkingLab from './pages/RecursiveThinkingLab'
import SonderSecPage from './pages/SonderSecPage'
import NotFound from './pages/NotFound'

export default function App() {
  const { pathname } = useLocation()
  const isPortal = pathname === '/'

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      {!isPortal && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<PortalPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/projects/bridgetos" element={<BridgetOS />} />
          <Route path="/projects/aegis" element={<Aegis />} />
          <Route path="/projects/recursive-thinking-lab" element={<RecursiveThinkingLab />} />
          <Route path="/projects/sondersec" element={<SonderSecPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isPortal && <Footer />}
    </div>
  )
}
