import NewBrandModal from "../components/NewBrandModal"
import { useEffect } from "react";
import useStockRequest from "../services/useStockRequests";
import BrandsAll from "../components/BrandsAll";
import { useState } from "react";
const Brands = () => {
  const [open, setOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);

const {getAllListStock} =useStockRequest()



  useEffect(() => {
    getAllListStock("brands");
  }, []);



  return (
    <div>
      <NewBrandModal   open={open}
          setOpen={setOpen}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}/>
      <BrandsAll setOpen={setOpen} setSelectedBrand={setSelectedBrand} />
    </div>
  )
}

export default Brands