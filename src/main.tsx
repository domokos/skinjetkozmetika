import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import SiteRouter from './SiteRouter'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <SiteRouter />
    </HashRouter>
  </StrictMode>,
)
