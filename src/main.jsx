import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './components/Nav'
import HeaderPage from './components/Header';
import Home from './components/Home'
import './styles/main.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderPage />
    <Nav />
    <main>
      <Home />
    </main>
  </StrictMode>,
)
