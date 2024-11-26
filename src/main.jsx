import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './components/Nav'
import HeaderPage from './components/Header';
import './styles/main.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderPage />
    <Nav />
  </StrictMode>,
)
