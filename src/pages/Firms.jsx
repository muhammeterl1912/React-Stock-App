import { useEffect, useState } from "react";
import useStockRequest from "../services/useStockRequests";
import NewFirmModal from "../components/NewFirmModal";
import FirmsAll from "../components/FirmsAll";
import { Box } from "@mui/material";
const Firms = () => {
  const { getAllListStock} = useStockRequest();
  const [open, setOpen] = useState(false);
  const [selectedFirm, setSelectedFirm] = useState(null);
  useEffect(() => {
  
    getAllListStock("firms");
  }, []);

  return (
    <div>
      <Box marginBottom="10px">
        <NewFirmModal
          open={open}
          setOpen={setOpen}
          selectedFirm={selectedFirm}
          setSelectedFirm={setSelectedFirm}
        />
      </Box>

      <FirmsAll setOpen={setOpen} setSelectedFirm={setSelectedFirm} />
    </div>
  );
};

export default Firms;
