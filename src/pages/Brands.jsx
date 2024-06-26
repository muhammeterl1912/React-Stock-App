import React, { useEffect, useState } from "react";
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
      {loading && <CardSkeleton />}
      {error && <ErrorMessage />}
      {!loading && !error && !brands.length && <NoDataMessage />}

      { !loading && brands.length > 0 && (
        <Grid container gap={2} mt={3} justifyContent={"center"}>
          <BrandsAll setOpen={setOpen} setSelectedBrand={setSelectedBrand} />
        </Grid>
      )}
    </div>
  );
};

export default Brands;
