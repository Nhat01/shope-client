import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from '../requesMethod'
import SetCookie from "../hooks/setCookie";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    SetCookie("token", res.data.accessToken);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};