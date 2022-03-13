type AuthState = {
  token: string | null;
  userId: string | null;
  email: string | null;
  message: string | null;
};

type AuthAction = {
  type: string;
  payload: AuthState;
};

type DispatchType = (arg: AuthState) => AuthState;
