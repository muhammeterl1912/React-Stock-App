import { useEffect } from "react";
import ProductsTable from "../components/ProductsTable";
import useStockRequest from "../services/useStockRequests";
import ProdouctNewModal from "../components/ProductNewModal"
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import TableSkeleton, {
  ErrorMessage,
  NoDataMessage,
} from "../components/DataFetchMessages";
const Products = () => {
  const { getAllListStock } = useStockRequest();
  const { products, loading, error } = useSelector((state) => state.stock);

  useEffect(() => {
    getAllListStock("products")
    getAllListStock("categories")
    getAllListStock("brands")

  }, []);

  return (
    <div>
         {error && <ErrorMessage />}
         {loading && <TableSkeleton />}     {!error && !loading && (
          <ProdouctNewModal/>
      )}
         {!loading && !error && !products.length && <NoDataMessage />}
    
      {!loading && products.length > 0 && (
        <Grid container gap={2} mt={3} justifyContent={"center"}>
        <ProductsTable  />
        </Grid>
      )}

    </div>
  );
};

export default Products;
