import React from 'react'
import { LoginButton } from './components/Auth0'
// import { LogoutButton } from './components/Auth0'
import { FaClipboardCheck } from 'react-icons/fa'
import './Login.css'

const Login = () => {
  return <div class="poop">
    <div class='info'>
      <div class='content'>
        <FaClipboardCheck class='clipboard' />
        <h1>Organize Your Life</h1>
        <LoginButton />
      </div>
    </div>
  </div>
}

export default Login
