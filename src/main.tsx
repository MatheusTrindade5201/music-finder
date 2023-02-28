import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes'
import '@/styles/global.css'
import { AuthenticationProvider } from './context/authenticationContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthenticationProvider>
      <AppRoutes />
    </AuthenticationProvider>
  </React.StrictMode>,
)
