import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuth = () => {
  const { authState, loginUser, newTokens, logout } = useContext(AuthContext);


  return {
    authState,
    loginUser,
    newTokens,
    logout,
  }
};
