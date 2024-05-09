import { useDispatch } from "react-redux";
import useAxiosInstance from "./useAxiosInstance";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";
import {
  fetchFail,
  fetchStart,
  getBrandSuccess,
  getStockSuccess,
} from "../features/stockSlice";

const useStockRequest = () => {
  const { axiosToken } = useAxiosInstance();
  const dispatch = useDispatch();

  const getFirmsStock = async (path = "firms") => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosToken(`/${path}`);
      const stockData = data.data;
      dispatch(getStockSuccess({ stockData, path}));
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error.message);
    }
  };

  const deleteFirmsStock = async (path = "firms", id) => {
    dispatch(fetchStart());
    try {
      await axiosToken.delete(`/${path}/${id}`);
      toastSuccessNotify("Firm Succesfully deleted.");
      getFirmsStock(path);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error.message);
    }
  };
  const createFirmsStock = async (path = "firms", createNewFirm) => {
    dispatch(fetchStart());
    try {
      await axiosToken.post(`/${path}`, createNewFirm);
      getFirmsStock(path);
      toastSuccessNotify("Firm Succesfully created.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error.message);
    }
  };
  const updateFirmsStock = async (path = "firms", id, updatedData) => {
    dispatch(fetchStart());
    try {
      await axiosToken.put(`/${path}/${id}`, updatedData);
      getFirmsStock(path);
      toastSuccessNotify("Firm Succesfully updated.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error.message);
    }
  };

  return {
    getFirmsStock,
    deleteFirmsStock,
    updateFirmsStock,
    createFirmsStock,
  };
};

export default useStockRequest;
