import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import App from './App'
import Login from './Login'
import reportWebVitals from './reportWebVitals'
import {Auth0Provider} from '@auth0/auth0-react'

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-gmfec22i.us.auth0.com"
      clientId="jSRFg5p3h5ZTkDOYIATuhrfHSXtFzAy7"
      redirectUri={window.location.origin}
      audience="hasura"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/app" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
