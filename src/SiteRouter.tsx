import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { Link, Navigate, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import PricesPage from './pages/PricesPage'
import ServicesPage from './pages/ServicesPage'
import TreatmentsPage from './pages/TreatmentsPage'
import './site.css'

const menuItems = [
  { to: '/', label: 'Főoldal', title: 'Skinjet Kozmetika | Személyre szabott szépségápolás Budapesten' },
  { to: '/bemutatkozas', label: 'Bemutatkozás', title: 'Bemutatkozás | Skinjet Kozmetika' },
  { to: '/szolgaltatasok', label: 'Szolgáltatásaink', title: 'Szolgáltatásaink | Skinjet Kozmetika' },
  { to: '/gepikezeles', label: 'Gépi kezelések', title: 'Gépi kezelések | Skinjet Kozmetika' },
  { to: '/arlista', label: 'Árlista', title: 'Árlista | Skinjet Kozmetika' },
  { to: '/kapcsolat', label: 'Kapcsolat', title: 'Kapcsolat | Skinjet Kozmetika' },
]

function SiteRouter() {
  const [openLocationKey, setOpenLocationKey] = useState<string | null>(null)
  const location = useLocation()
  const menuOpen = openLocationKey === location.key

  useEffect(() => {
    document.title = menuItems.find((item) => item.to === location.pathname)?.title ?? menuItems[0].title
    if (location.hash) {
      document.getElementById(location.hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.hash, location.pathname])

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenLocationKey(null)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <>
      <header className="site-header">
        <Link className="wordmark" to="/" aria-label="Skinjet Kozmetika, főoldal">
          <span className="wordmark-name">skinjet</span>
          <span className="wordmark-label">kozmetika · budapest</span>
        </Link>
        <div className="header-actions">
          <a className="header-call" href="tel:+369912885" aria-label="Telefonos időpontkérés"><Phone size={16} aria-hidden="true" /><span>Időpontot kérek</span></a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Menü bezárása' : 'Menü megnyitása'} aria-expanded={menuOpen} aria-controls="site-menu" onClick={() => setOpenLocationKey(menuOpen ? null : location.key)}>
            {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
            <span>Menü</span>
          </button>
        </div>
        {menuOpen && (
          <div className="menu-layer">
            <button className="menu-backdrop" type="button" aria-label="Menü bezárása" onClick={() => setOpenLocationKey(null)} />
            <nav className="menu-panel" id="site-menu" aria-label="Fő navigáció">
              <p className="menu-caption">Skinjet Kozmetika</p>
              {menuItems.map((item, index) => (
                <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => `menu-link${isActive ? ' is-active' : ''}`} onClick={() => setOpenLocationKey(null)}>
                  <span className="menu-number">0{index + 1}</span>{item.label}
                </NavLink>
              ))}
              <a className="menu-phone" href="tel:+369912885" onClick={() => setOpenLocationKey(null)}><Phone size={16} aria-hidden="true" /> +36 99 12 885</a>
            </nav>
          </div>
        )}
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bemutatkozas" element={<AboutPage />} />
        <Route path="/szolgaltatasok" element={<ServicesPage />} />
        <Route path="/gepikezeles" element={<TreatmentsPage />} />
        <Route path="/arlista" element={<PricesPage />} />
        <Route path="/kapcsolat" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <footer className="site-footer">
        <Link className="wordmark footer-wordmark" to="/"><span className="wordmark-name">skinjet</span><span className="wordmark-label">kozmetika · budapest</span></Link>
        <p>© 2026 Skinjet Kozmetika</p>
        <Link to="/kapcsolat">Kapcsolat <span aria-hidden="true">↗</span></Link>
      </footer>
    </>
  )
}

export default SiteRouter
