import { URL_AUTH_LOGIN } from "../../constants/Firebase";

export const AUTH_LOGIN = "AUTH_LOGIN";

export const loginWithEmail = (email, password) => {
  return async (dispatch) => {
    const res = fetch(URL_AUTH_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        email,
        password,
        returnSecureToken: true,
      },
    });

    if (!res.ok) throw new Error("Usuario y/o Contraseña incorrectos");

    const data = await res.json();
    dispatch({
      type: AUTH_LOGIN,
      payload: { token: data.idToken, userId: data.localId },
    });
  };
};
