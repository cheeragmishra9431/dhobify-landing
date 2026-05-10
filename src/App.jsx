import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/layout/ScrollToTop'
import LandingPage from './pages/LandingPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import RefundPolicy from './pages/RefundPolicy'
import Support from './pages/Support'
import LaundryInAreaOrNotFound from './pages/LaundryInAreaOrNotFound'
import StorePage from './pages/StorePage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-body">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/store/:storeSlug" element={<StorePage />} />
          <Route path="/:slug" element={<LaundryInAreaOrNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
