import axios from "axios";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";
import {
  fetchStart,
  loginSuccess,
  fetchFail,
  registerSuccess,
  logOutSession,
} from "../features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useApiRequests = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (userLoginData) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        userLoginData
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("Successfully Logged-In");
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error.message);
    }
  };

  const register = async (registerUser) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users`,
        registerUser
      );
      dispatch(registerSuccess(data));
      toastSuccessNotify("Successfully Registered");
      navigate("/stock");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  const logOut = async () => {
    try {
      const data = await axios(`${process.env.REACT_APP_BASE_URL}/auth/logout`);
      dispatch( logOutSession())
      toastSuccessNotify("User Successfully Logged-out.");
      navigate("/");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  return { login, register, logOut };
};

export default useApiRequests;
