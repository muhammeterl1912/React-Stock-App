import SalesTable from "../components/SalesTable";
import NewSalesModal from "../components/NewSalesModal";
import useStockRequest from "../services/useStockRequests";
import { useEffect, useState } from "react";

const Sales = () => {
  const [open, setOpen] = useState(false);
  const [modalId, setModalId] = useState("");
  const [salesModal, setSalesModal] = useState({
    brandId: "",
    productId: "",
    quantity: "",
    price: "",
  });


  const { getAllListStock } = useStockRequest();

  useEffect(() => {
    getAllListStock("sales");
  }, []);
  return (
    <div>
      <NewSalesModal
        open={open}
        setOpen={setOpen}
        setSalesModal={setSalesModal}
        salesModal={salesModal}
        modalId={modalId}
      />
      <SalesTable setSalesModal={setSalesModal} setOpen={setOpen}  setModalId={setModalId} salesModal={salesModal} />
    </div>
  );
};

export default Sales;
