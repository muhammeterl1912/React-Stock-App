import NewBrandModal from "../components/NewBrandModal"
import { useEffect } from "react";
import useBrandsRequest from "../services/useBrandsRequest";
import BrandsAll from "../components/BrandsAll";
const Brands = () => {



const {getBrands} =useBrandsRequest()



  useEffect(() => {
    getBrands();
  }, []);



  return (
    <div>
      <NewBrandModal/>
      <BrandsAll/>
    </div>
  )
}

export default Brands