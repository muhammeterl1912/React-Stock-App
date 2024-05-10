import { useDispatch } from "react-redux";
import useAxiosInstance from "./useAxiosInstance";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";
import {
  fetchFail,
  fetchStart,
  getStockSuccess,
} from "../features/stockSlice";

const useStockRequest = () => {
  const { axiosToken } = useAxiosInstance();
  const dispatch = useDispatch();

  const getAllListStock = async (path) => {
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

  const deleteFirmsStock = async (path , id) => {
    dispatch(fetchStart());
    try {
      await axiosToken.delete(`/${path}/${id}`);
      toastSuccessNotify("Firm Succesfully deleted.");
      getAllListStock(path);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error.message);
    }
  };
  const createFirmsStock = async (path, createNewStock) => {
    dispatch(fetchStart());
    try {
      await axiosToken.post(`/${path}`, createNewStock);
      getAllListStock(path);
      toastSuccessNotify("Firm Succesfully created.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error.message);
    }
  };
  const updateFirmsStock = async (path, id, updatedData) => {
    dispatch(fetchStart());
    try {
      await axiosToken.put(`/${path}/${id}`, updatedData);
      getAllListStock(path);
      toastSuccessNotify("Firm Succesfully updated.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error.message);
    }
  };

  return {
    getAllListStock,
    deleteFirmsStock,
    updateFirmsStock,
    createFirmsStock,
  };
};

export default useStockRequest;
