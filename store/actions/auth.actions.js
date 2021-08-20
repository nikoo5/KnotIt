export const AUTH_LOGIN = "AUTH_LOGIN";

export const loginWithEmail = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: AUTH_LOGIN, payload: { token: "", userId: "" } });
  };
};
