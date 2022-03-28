import { createContext } from 'react';
import { AuthState } from '../../interfaces/authInterfaces';

interface AuthContextProps {
  authState: AuthState;
  loginUser: (email: string, password: string) => Promise<boolean>;
  newTokens: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);
