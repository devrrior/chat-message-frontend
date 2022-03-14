import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useReducer } from 'react';
import { AuthState } from '../interfaces/authInterfaces';
import { AUTHENTICATED } from './actionTypes';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

interface AuthProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const INITIAL_STATE: AuthState = {
  email: null,
  first_name: null,
  last_name: null,
  isAthenticathed: false,
  accessToken: null,
  refreshToken: null,
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const init = (initialState: AuthState): AuthState => {
    const accessToken = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');

    if (accessToken === null || refreshToken === null) {
      return initialState;
    }

    return {
      ...initialState,
      accessToken,
      refreshToken,
    };
  };

  const [authState, dispatch] = useReducer(authReducer, INITIAL_STATE, init);

  const loginUser = async (email: string, password: string) => {
    const LOGIN_URL = 'api/token/';

    const response = await axios.post(
      LOGIN_URL,
      JSON.stringify({ username: email, password }),
      { headers: { 'Content-Type': 'application/json' }, withCredentials: true }
    );

    const accessToken = response?.data?.accessToken;
    const refreshToken = response?.data?.refreshToken;
    const payload = jwtDecode(accessToken);

    console.log(payload)

    // const newAuth: AuthState = {
    //   email,
    //   isAthenticathed: true,
    //   accessToken,
    //   refreshToken,
    //
    // }
    //
    // dispatch({ type: AUTHENTICATED, payload: INITIAL_STATE });
  };

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
