import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

/* Font self-host — hanya subset latin (konten Indonesia), tanpa Google Fonts */
import '@fontsource/inter/latin-300'
import '@fontsource/inter/latin-400'
import '@fontsource/inter/latin-500'
import '@fontsource/inter/latin-600'
import '@fontsource/playfair-display/latin-400'
import '@fontsource/playfair-display/latin-500'
import '@fontsource/playfair-display/latin-600'
import '@fontsource/playfair-display/latin-700'
import '@fontsource/playfair-display/latin-400-italic'
import '@fontsource/playfair-display/latin-500-italic'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
