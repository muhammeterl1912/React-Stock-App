import React, { useEffect, useState } from "react";
import SalesTable from "../components/SalesTable";
import NewSalesModal from "../components/NewSalesModal";
import useStockRequest from "../services/useStockRequests";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import TableSkeleton, {
  ErrorMessage,
  NoDataMessage,
} from "../components/DataFetchMessages";

const Sales = () => {
  const [open, setOpen] = useState(false);
  const [modalId, setModalId] = useState("");
  const [salesModal, setSalesModal] = useState({
    brandId: "",
    productId: "",
    quantity: "",
    price: "",
  });
  const { sales, loading, error } = useSelector((state) => state.stock);
  const { getAllListStock } = useStockRequest();

  useEffect(() => {
    getAllListStock("sales");
    getAllListStock("products");
    getAllListStock("categories");
    getAllListStock("brands");
  }, []);

  return (
    <div>
      {error && <ErrorMessage />}
      {loading && <TableSkeleton />}
      {!loading && !error && !sales.length && <NoDataMessage />}
      {!error && !loading && (
        <NewSalesModal
          open={open}
          setOpen={setOpen}
          setSalesModal={setSalesModal}
          salesModal={salesModal}
          modalId={modalId}
        />
      )}
      {!error && !loading && sales.length > 0 && (
        <Grid container gap={2} mt={3} justifyContent={"center"}>
          <SalesTable
            setSalesModal={setSalesModal}
            setOpen={setOpen}
            setModalId={setModalId}
            salesModal={salesModal}
          />
        </Grid>
      )}
    </div>
  );
};

export default Sales;
