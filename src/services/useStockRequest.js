import { useDispatch } from "react-redux"
import useAxiosInstance from "./useAxiosInstance"
import { listAll } from "../features/firmsSlice"


const useStockRequest = () => {
  const { axiosToken,loading } = useAxiosInstance()
  const dispatch = useDispatch()



  const getFirms = async () => {
 
    try {
      const { data } = 
      
      await axiosToken("/firms")
      console.log(`data ${data}`)
   dispatch(listAll(data.data))
     
    } catch (error) {
     
     
    }
  }

  return { getFirms }
}

export default useStockRequest
