import PurchaseTable from "../components/PurchaseTable";
import NewPurchaseModal from "../components/NewPurchaseModal";
import useStockRequest from "../services/useStockRequests";
import { useEffect, useState } from "react";

const Purchases = () => {
  const [open, setOpen] = useState(false);
  const [modalId, setModalId] = useState("");
  const [salesModal, setSalesModal] = useState({
    firmId: "",
    brandId: "",
    productId: "",
    quantity: "",
    price: "",
  });
  const { getAllListStock } = useStockRequest();
  useEffect(() => {
    getAllListStock("purchases");
    getAllListStock("firms");
    getAllListStock("products");
    getAllListStock("brands");
  }, []);

  return (
    <div>
      <NewPurchaseModal
        open={open}
        setOpen={setOpen}
        setModalId={setModalId}
        modalId={modalId}
        salesModal={salesModal}
        setSalesModal={setSalesModal}
      />
      <PurchaseTable
        setOpen={setOpen}
        setModalId={setModalId}
        modalId={modalId}
        salesModal={salesModal}
        setSalesModal={setSalesModal}
      />
    </div>
  );
};

export default Purchases;
