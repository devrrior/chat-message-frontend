export interface AuthState{
  email: string | null,
  first_name: string | null,
  last_name: string | null,
  isAthenticathed: boolean,
  accessToken: string | null,
  refreshToken: string | null
}

export interface AuthAction {
  type: string,
  payload: AuthState
}
