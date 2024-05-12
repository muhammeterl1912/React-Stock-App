import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import useStockRequest from "../services/useStockRequests";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 5,
};
const styleInput = {
  margin: 1,
  width: "100%",
};


export default function ProductNewModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [productModal, setProductModal] = React.useState({
    categoryId: "",
    brandId: "",
    name: "",
  });
  const brandsData = useSelector((item) => item.stock.brands);
  const {createFirmsStock} = useStockRequest()

  const handleSelectChange = (e) => {
    setProductModal((prevVal) => ({
      ...prevVal,
      [e.target.name]: e.target.value,
    }));
  };
const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    createFirmsStock("products", productModal);
    handleClose();
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          backgroundColor: "black",
          marginBottom: "10px",
          color: "white",
          "&:hover": {
            backgroundColor: "black",
            transform: "scale(0.9)",
            transition: "all 0.2s ease",
          },
        }}
      >
        NEW PRODUCT
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label-1">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label-1"
                id="demo-simple-select-1"
                value={productModal.categoryId}
                label="Category"
                name="categoryId"
                required
                onChange={handleSelectChange}
                sx={styleInput}
              >
                <MenuItem value={"65343222b67e9681f937f203"}>Jewelery</MenuItem>
                <MenuItem value={"65343222b67e9681f937f202"}>Drink</MenuItem>
                <MenuItem value={"65343222b67e9681f937f201"}>Food</MenuItem>
                <MenuItem value={"65343222b67e9681f937f204"}>Electronic</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label-2">Brand</InputLabel>
              <Select
                labelId="demo-simple-select-label-2"
                id="demo-simple-select-2"
                value={productModal.brandId}
                label="Brand"
                name="brandId"
                required
                onChange={handleSelectChange}
                sx={styleInput}
              >     <MenuItem sx={{ borderBottom: "1px solid black" }}onClick={()=>navigate("/stock/brands/")} >Add New Brand</MenuItem>

               {
                brandsData?.map((brand)=>(
                  <MenuItem value={brand._id}>{brand.name}</MenuItem>
                
                ))
               }
              </Select>
            </FormControl>
            <TextField
              label="Product Name"
              id="outlined-basic"
              value={productModal.name}
              required
              onChange={handleSelectChange}
              name="name"
              sx={styleInput}
            />
            <Button
              type="submit"
              variant="contained"
              sx={styleInput} 
            >
              ADD PRODUCT
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
