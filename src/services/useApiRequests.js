import axios from "axios";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";
import { fetchStart, loginSuccess, fetchFail } from "../features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";



const useApiRequests = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const login = async (userLoginData) => {

    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        userLoginData
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("Successfully Logged-In");
      navigate("/stock")
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error.message);
    }
  };
  return {login}
}

export default useApiRequests

