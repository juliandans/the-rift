import React, { useCallback } from 'react';
import { GoogleLogin } from 'react-google-login';
import { login } from '../lib/api';
import { useCurrentUser } from '../state/currentUser';

export default function Login() {
  const { setCurrentUser } = useCurrentUser();

  const onSuccess = useCallback(async googleData => {
    const user = await login(googleData);
    setCurrentUser(user);
  }, []);

  return (
    <>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Log in with Google"
        onSuccess={onSuccess}
        onFailure={() => console.log('THERE WAS A FAILURE')}
        cookiePolicy={'single_host_origin'}
      />
    </>
  );
}
