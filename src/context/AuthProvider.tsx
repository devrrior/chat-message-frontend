import { useReducer } from 'react';
import { AuthState, UserState } from '../interfaces/authInterfaces';
import { AuthContext } from './AuthContext';
import { authReducer } from '../reducers/authReducers';
import { axiosInstance } from '../api/axios';
import jwtDecode from 'jwt-decode';
import { AUTHENTICATED, LOGOUT } from '../reducers/actionTypes';
import { TokenPayload } from '../interfaces/tokenInterfaces';

interface AuthProviderProps {
  children: JSX.Element | JSX.Element[];
}

const USER_INITAL_STATE: UserState = {
  user_id: null,
  email: null,
  firstName: null,
  lastName: null,
};

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

    const payload = jwtDecode<TokenPayload>(accessToken);

    const { user_id, email, firstName, lastName, exp } = payload;

    return {
      ...initialState,
      user: { user_id, email, firstName, lastName },
      accessToken,
      refreshToken,
      isAthenticathed: true,
      exp,
    };
  };

  const [authState, dispatch] = useReducer(authReducer, INITIAL_STATE, init);

  const setToken = (accessToken: string, refreshToken: string): void => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  };

  const deleteToken = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
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

    const { user_id, firstName, lastName, exp } = payload;

    const user: UserState = {
      user_id,
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

  const logout = () => {
    dispatch({ type: LOGOUT, payload: INITIAL_STATE });
    deleteToken();
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        loginUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
