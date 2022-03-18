import { useReducer } from 'react';
import { AuthState, UserState } from '../interfaces/authInterfaces';
import { AuthContext } from './AuthContext';
import { authReducer } from '../reducers/authReducer';
import { axiosInstance } from '../api/axios';
import jwtDecode from 'jwt-decode';
import { AUTHENTICATED, LOGOUT, REFRESH } from '../reducers/actionTypes';
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

  const newTokens = (accessToken: string, refreshToken: string): void => {
    setToken(accessToken, refreshToken);
    dispatch({
      type: REFRESH,
      payload: { ...INITIAL_STATE, accessToken, refreshToken },
    });
  };

  const loginUser = (email: string, password: string): Promise<boolean> => {
    return new Promise((resolve: Function, reject: Function) => {
      const LOGIN_URL = 'api/token/';
      axiosInstance
        .post(LOGIN_URL, JSON.stringify({ email, password }), {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((response) => {
          const accessToken = response.data.access;
          const refreshToken = response?.data?.refresh;
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
          resolve();
        })
        .catch(() => {
          dispatch({ type: LOGOUT, payload: INITIAL_STATE });
          reject();
        });
    });
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
        newTokens,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
