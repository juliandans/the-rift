import React from 'react';
import { Heading, Text, Container, Center, Link } from '@chakra-ui/react';
import {GoogleLogin} from "react-google-login"
async function handleLogin(googleData) {
  const res = await fetch(process.env.REACT_APP_API_URL+"/authenticate", {
    method: "POST",
    body: JSON.stringify({
      token: googleData.tokenId
    }),
  headers: {
    "Content-Type": "application/json"
    }
  })
  const data = await res.json()
  console.log(data)
  // store returned user somehow
}

export default function Login() {
  console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID)
  return (
    <>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={'single_host_origin'}
      />
    </>
  );
}
