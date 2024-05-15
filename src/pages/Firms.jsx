import React, { useEffect, useState } from "react";
import useStockRequest from "../services/useStockRequests";
import Grid from "@mui/material/Grid";
import NewFirmModal from "../components/NewFirmModal";
import FirmsAll from "../components/FirmsAll";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import {
  CardSkeleton,
  ErrorMessage,
  NoDataMessage,
} from "../components/DataFetchMessages";

const Firms = () => {
  const { getAllListStock } = useStockRequest();
  const [open, setOpen] = useState(false);
  const [selectedFirm, setSelectedFirm] = useState(null);
  const { firms, loading, error } = useSelector((state) => state.stock);

  useEffect(() => {
    getAllListStock("firms");
  }, []);

  return (
    <div>
      <Box marginBottom="10px">
        {!error && (
          <NewFirmModal
            open={open}
            setOpen={setOpen}
            selectedFirm={selectedFirm}
            setSelectedFirm={setSelectedFirm}
          />
        )}
      </Box>
      {loading && <CardSkeleton />}
      {error && <ErrorMessage />}
      {!loading && !error && !firms.length && <NoDataMessage />}

      {  !loading && firms.length > 0 && (
        <Grid container gap={2} mt={3} justifyContent={"center"}>
          <FirmsAll setOpen={setOpen} setSelectedFirm={setSelectedFirm} />
        </Grid>
      )}
    </div>
  );
};

export default Firms;
