import { AuthAction, AuthState } from '../interfaces/authInterfaces';
import { AUTHENTICATED, LOGOUT } from './actionTypes';

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

    default:
      return state;
  }
};
