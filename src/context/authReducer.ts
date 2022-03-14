import { AuthAction, AuthState } from '../interfaces/authInterfaces';
import { AUTHENTICATED, LOGOUT } from './actionTypes';
import { INITIAL_STATE } from './AuthProvider';

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...action.payload
      };

    case LOGOUT:
      return {
        ...INITIAL_STATE
      };

    default:
      return state;
  }
};
