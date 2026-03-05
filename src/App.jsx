import { Routes, Route, Navigate, useLocation } from 'react-router'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import HomePage from './pages/HomePage'
import BridgetOS from './pages/BridgetOS'
import Aegis from './pages/Aegis'
import RecursiveThinkingLab from './pages/RecursiveThinkingLab'
import SonderSecPage from './pages/SonderSecPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/projects/bridgetos" element={<BridgetOS />} />
          <Route path="/projects/aegis" element={<Aegis />} />
          <Route path="/projects/recursive-thinking-lab" element={<RecursiveThinkingLab />} />
          <Route path="/projects/sondersec" element={<SonderSecPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
