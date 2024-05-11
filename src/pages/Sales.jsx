import SalesTable from "../components/SalesTable"
import NewSalesModal from "../components/NewSalesModal";
import useStockRequest from "../services/useStockRequests";
import { useEffect } from "react";

const Sales = () => {

const {getAllListStock} = useStockRequest()

  useEffect(() => {
    getAllListStock("sales");
  }, []);
  return (
    <div>
<NewSalesModal/>
<SalesTable/>


    </div>
  )
}

export default Sales