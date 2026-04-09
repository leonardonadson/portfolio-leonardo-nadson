import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { App } from './App.tsx'
import ProjetosPage from './pages/ProjetosPage.tsx'

import './i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projetos" element={<ProjetosPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
