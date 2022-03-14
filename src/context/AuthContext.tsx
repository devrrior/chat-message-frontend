import { createContext } from 'react';

interface AuthContextProps {
  loginUser: (email: string, password: string) => void;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);
