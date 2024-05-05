import axios from "axios";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";
import { fetchStart } from "../features/authSlice";
import { useDispatch } from "react-redux";

export const login = async (userLoginData) => {
  const dispatch = useDispatch();
  dispatch(fetchStart());
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/login`,
      userLoginData
    );
    toastSuccessNotify("Successfully Logged-In");
  } catch (error) {
    toastErrorNotify(error.message);
  }
};
