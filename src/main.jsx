import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { CryptoProvider } from './context/CryptoContext.jsx'
createRoot(document.getElementById("root")).render(
  <CryptoProvider>
  <StrictMode>
    <Router>
       <App />
    </Router>
  </StrictMode>
  </CryptoProvider>
)
