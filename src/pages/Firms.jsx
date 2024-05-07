import { useEffect } from "react"
import useStockRequest from "../services/useStockRequest"

import FirmsAll from "../components/FirmsAll"

const Firms = () => {
  const { getFirms } = useStockRequest()




  useEffect(() => {
    
    getFirms()
  }, [])

  return <div>

    <FirmsAll/>
  </div>
}

export default Firms
