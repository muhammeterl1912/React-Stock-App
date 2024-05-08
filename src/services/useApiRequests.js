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
import useStockRequest from "./useStockRequest";

const useApiRequests = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { axiosToken, axiosPublic } = useAxiosInstance();
  const { getFirms } = useStockRequest();
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

  const createFirm = async (createNewFirm) => {
    try {
      await axiosToken.post("/firms/", createNewFirm);
      getFirms();

      console.log("first");
      toastSuccessNotify("Firm Succesfully created.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error.message);
    }
  };

  return { login, register, logOut, createFirm };
};

export default useApiRequests;
