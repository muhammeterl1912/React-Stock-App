import HomeCards from "../components/HomeCards"
import Charts from "../components/Charts"
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
      <Charts />
    </div>
  )
}

export default Home
