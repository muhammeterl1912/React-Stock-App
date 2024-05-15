import PurchaseTable from "../components/PurchaseTable";
import NewPurchaseModal from "../components/NewPurchaseModal";
import useStockRequest from "../services/useStockRequests";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import TableSkeleton, {
  ErrorMessage,
  NoDataMessage,
} from "../components/DataFetchMessages";
import { useSelector } from "react-redux";
const Purchases = () => {
  const [open, setOpen] = useState(false);
  const [modalId, setModalId] = useState("");
  const [purchaseModal, setPurchaseModal] = useState({
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
  const { purchases, loading, error } = useSelector((state) => state.stock);
  return (
    <div>
     
      {error && <ErrorMessage />}
      {loading && <TableSkeleton />}{" "}
      {!error && !loading && (
        <NewPurchaseModal
          open={open}
          setOpen={setOpen}
          setModalId={setModalId}
          modalId={modalId}
          purchaseModal={purchaseModal}
          setPurchaseModal={setPurchaseModal}
        />
      )}
      {!loading && !error && !purchases.length && <NoDataMessage />}
      {!loading && purchases.length > 0 && (
        <Grid container gap={2} mt={3} justifyContent={"center"}>
          <PurchaseTable
            setOpen={setOpen}
            setModalId={setModalId}
            modalId={modalId}
         
            setPurchaseModal={setPurchaseModal}
          />
        </Grid>
      )}
    </div>
  );
};

export default Purchases;
