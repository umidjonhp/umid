import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GadjetsContext from './context/gadjets-context.js'
import GadjetsContextProvider from './context/GadjetsContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GadjetsContextProvider>
    <App />
  </GadjetsContextProvider>
)
