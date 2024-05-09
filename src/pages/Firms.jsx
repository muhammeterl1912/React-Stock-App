import { useEffect, useState } from "react";
import useFirmsRequest from "../services/useFirmsRequest ";
import NewFirmModal from "../components/NewFirmModal";
import FirmsAll from "../components/FirmsAll";
import { Box } from "@mui/material";
const Firms = () => {
  const { getFirms } = useFirmsRequest();
  const [open, setOpen] = useState(false);
  const [selectedFirm, setSelectedFirm] = useState(null);
  useEffect(() => {
    getFirms();
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
