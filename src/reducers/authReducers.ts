import { AuthAction, AuthState } from '../interfaces/authInterfaces';
import { AUTHENTICATED, LOGOUT, REFRESH } from './actionTypes';

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...action.payload,
      };

    case LOGOUT:
      return {
        ...action.payload,
      };
    case REFRESH:
      const { refreshToken, accessToken } = action.payload;
      return {
        ...state,
        refreshToken,
        accessToken,
      }

    default:
      return state;
  }
};
