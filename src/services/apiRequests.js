import axios from "axios";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";
import { fetchStart, loginSuccess,fetchFail } from "../features/authSlice";
import { useDispatch } from "react-redux";

export const login = async (userLoginData) => {
  const dispatch = useDispatch();
  dispatch(fetchStart());
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/login`,
      userLoginData
    );
    dispatch(loginSuccess(data))
    toastSuccessNotify("Successfully Logged-In");
  } catch (error) {
    dispatch(fetchFail())
    toastErrorNotify(error.message);
  }
};
