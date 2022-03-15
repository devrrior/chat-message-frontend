export interface UserState {
  user_id: number | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
}

export interface AuthState {
  user: UserState;
  isAthenticathed: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  exp: number | null;
}

export interface AuthAction {
  type: string;
  payload: AuthState;
}
