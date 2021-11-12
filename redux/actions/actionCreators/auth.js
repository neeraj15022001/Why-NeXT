import { LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS } from "../actionTypes";

export function loginStart() {
  return {
    type: LOGIN_START,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function loginFailed(error) {
  return {
    type: LOGIN_FAILED,
    error,
  };
}
