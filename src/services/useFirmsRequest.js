import { useDispatch, useSelector } from "react-redux";
import useAxiosInstance from "./useAxiosInstance";
import { listAll } from "../features/firmsSlice";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";
import { FirmsfetchStart, FirmsFetchFail } from "../features/firmsSlice";
import { fetchFail, createFirmSuccess } from "../features/authSlice";
const useFirmsRequest = () => {
  const { axiosToken } = useAxiosInstance();
  const dispatch = useDispatch();

  const createFirm = async (createNewFirm) => {
    dispatch(FirmsfetchStart());
    try {
     await axiosToken.post("/firms/", createNewFirm);
      getFirms();

      toastSuccessNotify("Firm Succesfully created.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error.message);
    }
  };

  const getFirms = async () => {
    dispatch(FirmsfetchStart());
    try {
      const { data } = await axiosToken("/firms");
      dispatch(listAll(data.data));
    } catch (error) {
      dispatch(FirmsFetchFail());
    }
  };
  const deleteFirms = async (firmId) => {
    dispatch(FirmsfetchStart());
    try {
      await axiosToken.delete(`/firms/${firmId}`);
      toastSuccessNotify("Firm Succesfully deleted.");
      getFirms();
    } catch (error) {
      dispatch(FirmsFetchFail());
    }
  };
  const updateFirm = async (id,editForms) => {
    dispatch(FirmsfetchStart());
    try {
      await axiosToken.patch(`/firms/${id}`,editForms);
      toastSuccessNotify("Firm Succesfully updated.");
      getFirms();
    } catch (error) {
      dispatch(FirmsFetchFail());
    }
  };
  return { getFirms, deleteFirms, updateFirm ,createFirm};
};

export default useFirmsRequest;
