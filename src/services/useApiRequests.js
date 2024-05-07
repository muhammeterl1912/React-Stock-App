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
import useAxiosInstance from "./useAxiosInstance";

const useApiRequests = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { axiosToken, axiosPublic } = useAxiosInstance();

  const login = async (userLoginData) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("/auth/login/", userLoginData);

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
      const { data } = await axiosPublic.post("/users/", registerUser);
      dispatch(registerSuccess(data));
      toastSuccessNotify("Successfully Registered");
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error.message);
    }
  };

  const logOut = async () => {
    try {
      await axiosToken.get("/auth/logout");
      dispatch(logOutSession());
      toastSuccessNotify("User Successfully Logged-out.");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error.message);
    }
  };

  return { login, register, logOut };
};

export default useApiRequests;
