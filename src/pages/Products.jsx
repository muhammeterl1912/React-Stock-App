import { useEffect } from "react";
import ProductsTable from "../components/ProductsTable";
import useStockRequest from "../services/useStockRequests";

const Products = () => {
  const { getAllListStock } = useStockRequest();
 

  useEffect(() => {
    getAllListStock("products");
  }, []);

  return (
    <div>
      <ProductsTable  />
    </div>
  );
};

export default Products;
