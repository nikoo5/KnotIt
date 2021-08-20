import { AUTH_LOGIN } from "../actions/auth.actions";

const INITIAL_STATE = {
  token: null,
  userId: null,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
      };
    default:
      return { ...state };
  }
};

export default AuthReducer;
