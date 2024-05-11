import { useEffect } from "react";
import ProductsTable from "../components/ProductsTable";
import useStockRequest from "../services/useStockRequests";
import ProdouctNewModal from "../components/ProductNewModal"
const Products = () => {
  const { getAllListStock } = useStockRequest();
 

  useEffect(() => {
    getAllListStock("products");
  }, []);

  return (
    <div>
    <ProdouctNewModal/>
      <ProductsTable  />
    </div>
  );
};

export default Products;
