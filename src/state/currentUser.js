import { useCallback, useState } from 'react';
import useAsync from 'react-use/lib/useAsync';
import constate from 'constate';
import { me } from '../lib/api';

const _useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const logout = useCallback(() => setCurrentUser(null), []);

  /**
   * When this hook is used, it requests the current user from the backend
   * so that the front-end can access it
   */
  useAsync(async () => {
    const user = await me();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return {
    currentUser,
    isLoggedIn: !!currentUser,
    logout,
    setCurrentUser,
  };
};

export const [CurrentUserProvider, useCurrentUser] = constate(_useCurrentUser);
