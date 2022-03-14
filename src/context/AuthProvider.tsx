import { axiosInstance } from '../api/axios';
import { useReducer } from 'react';
import { AuthState, UserState } from '../interfaces/authInterfaces';
import { AUTHENTICATED } from './actionTypes';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import jwtDecode from 'jwt-decode';
import { TokenPayload } from '../interfaces/tokenInterfaces';

interface AuthProviderProps {
  children: JSX.Element | JSX.Element[];
}

const USER_INITAL_STATE: UserState = {
  email: null,
  firstName: null,
  lastName: null,
}

export const INITIAL_STATE: AuthState = {
  user: USER_INITAL_STATE,
  isAthenticathed: false,
  accessToken: null,
  refreshToken: null,
  exp: null,
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const init = (initialState: AuthState): AuthState => {
    const accessToken = localStorage.getItem('accessToken');
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

  const setToken = (accessToken: string, refreshToken: string): void => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  };

  const loginUser = async (email: string, password: string) => {
    const LOGIN_URL = '/api/token/';

    const response = await axiosInstance.post(
      LOGIN_URL,
      JSON.stringify({ username: email, password: password }),
      { headers: { 'Content-Type': 'application/json' } }
    );

    const accessToken = await response?.data?.access;
    const refreshToken = await response?.data?.refresh;

    setToken(accessToken, refreshToken);
    const payload = jwtDecode<TokenPayload>(accessToken);

    const { firstName, lastName, exp } = payload;

    const user: UserState = {
      email,
      firstName,
      lastName,
    };

    const newAuth: AuthState = {
      user,
      isAthenticathed: true,
      accessToken,
      refreshToken,
      exp,
    };

    dispatch({ type: AUTHENTICATED, payload: newAuth });
  };

  return (
    <AuthContext.Provider value={{ loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};
