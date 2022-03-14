import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../Login.css'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button class='login-button' onClick={() => loginWithRedirect()}>Log In</button>;
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <a onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </a>
  );
};

export { LoginButton, LogoutButton };
