import { useDispatch, useSelector } from "react-redux";
import useAxiosInstance from "./useAxiosInstance";
import { listAll } from "../features/firmsSlice";
import { FirmsfetchStart, FirmsFetchFail } from "../features/firmsSlice";

const useStockRequest = () => {
  const { axiosToken } = useAxiosInstance();
  const dispatch = useDispatch();

  const getFirms = async () => {
    dispatch(FirmsfetchStart());
    try {
      const { data } = await axiosToken("/firms");
      dispatch(listAll(data.data));
    } catch (error) {
      dispatch(FirmsFetchFail());
    }
  };

  return { getFirms };
};

export default useStockRequest;
