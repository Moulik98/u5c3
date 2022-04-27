import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import {BrowserRouter} from "react-router-dom"
// import { AuthContextProvider } from './contexts/AuthContexts'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* <AuthContextProvider>


  </AuthContextProvider> */}
  <App />
  

  </React.StrictMode>
)
