import { useDispatch } from "react-redux"
import useAxiosInstance from "./useAxiosInstance"

const useStockRequest = () => {
  const { axiosToken } = useAxiosInstance()
  const dispatch = useDispatch()

  const getFirms = async () => {
 
    try {
      const { data } = axiosToken("/firms")
   
     
    } catch (error) {
     
     
    }
  }

  return { getFirms }
}

export default useStockRequest
