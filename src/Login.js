import React, { useEffect } from 'react'
import { LoginButton } from './components/Auth0'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from "react-router-dom";
import './Login.css'

const Login = () => {
  const { user } = useAuth0();
  let navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/app");
    }
  }, [navigate, user])

  return <div class="poop">
    <div class='info'>
      <div class='content'>
        {/* <FaClipboardCheck class='clipboard' /> */}
        <h1>Organize Your Life</h1>
        <LoginButton />
      </div>
    </div>
  </div>
}

export default Login
