import { useEffect } from "react";
import useFirmsRequest from "../services/useFirmsRequest ";
import NewFirmModal from "../components/NewFirmModal";
import FirmsAll from "../components/FirmsAll";
import { Box } from '@mui/material';
const Firms = () => {
  const { getFirms } = useFirmsRequest();

  useEffect(() => {
    getFirms();
  }, []);

  return (
    <div>
     <Box marginBottom="10px">
      <NewFirmModal/>
    </Box>

  
      <FirmsAll />
    </div>
  );
};

export default Firms;
