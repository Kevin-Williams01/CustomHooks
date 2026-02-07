import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// CSS
import './index.css'
// Componentes
import { HooksApp } from './HooksApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HooksApp/>
  </StrictMode>,
)