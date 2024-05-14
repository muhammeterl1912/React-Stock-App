import NewBrandModal from "../components/NewBrandModal";
import useStockRequest from "../services/useStockRequests";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import BrandsAll from "../components/BrandsAll";
import {
  CardSkeleton,
  ErrorMessage,
  NoDataMessage,
} from "../components/DataFetchMessages";
import { useState, useEffect } from "react";
const Brands = () => {
  const [open, setOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const { brands, loading, error } = useSelector((state) => state.stock);
  const { getAllListStock } = useStockRequest();

  useEffect(() => {
    getAllListStock("brands");
  }, []);

  return (
    <div>
      {!error && (
        <NewBrandModal
          open={open}
          setOpen={setOpen}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
        />
      )}
      {loading && (
        <CardSkeleton>
          <BrandsAll />
        </CardSkeleton>
      )}
      {error && <ErrorMessage />}
      {!loading && !error && !brands.length && <NoDataMessage />}

      {!error && !loading && brands.length > 0 && (
        <Grid container gap={2} mt={3} justifyContent={"center"}>
          <BrandsAll setOpen={setOpen} setSelectedBrand={setSelectedBrand} />
        </Grid>
      )}
    </div>
  );
};

export default Brands;
