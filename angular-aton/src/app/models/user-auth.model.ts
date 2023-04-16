export interface AuthUser {
  email: string;
  password: string;
}

export interface ResponseAuthUser {
  id?: number;
  token: string;
}
