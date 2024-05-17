
import HomeCards from "../components/HomeCards"
import useStockRequest from "../services/useStockRequests"
import { useEffect } from "react"

const Home = () => {
  const {  getAllListStock} = useStockRequest()

  useEffect(() => {
    getAllListStock("sales")
    getAllListStock("purchases")
  }, [])

  return (
    <div>
      <HomeCards />
 
    </div>
  )
}

export default Home
