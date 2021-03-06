const axios = require('axios');

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

/**
 * Runs the request to log in the user
 * The server sets the session information (included with withCredentials: true)
 * The cookie will be sent back to the backend on all subsequent requests
 */
export const login = async googleData => {
  const { data } = await client.post(
    '/authenticate',
    {
      token: googleData.tokenId,
    },
    { withCredentials: true }
  );
  return data;
};

/**
 * Gets the current user from the backend (verifies they're logged in via session)
 */
export const me = async () => {
  const { data } = await client.get('/me', { withCredentials: true });
  return data;
};
