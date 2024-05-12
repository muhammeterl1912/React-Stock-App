import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useStockRequest from "../services/useStockRequests";

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
  height: "75%",
  width: "100%",
};

export default function NewSalesModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { brands, products } = useSelector((state) => state.stock);
  const [salesModal, setSalesModal] = useState({
    brandId: "",
    productId: "",
    quantity: "",
    price: "",
  });

  const { createFirmsStock } = useStockRequest();

  const handleSelectChange = (e) => {
    setSalesModal((prevVal) => ({
      ...prevVal,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createFirmsStock("sales", salesModal);
    handleClose();
  };

  const navigate = useNavigate();

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
        NEW SALE
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
              <InputLabel id="demo-simple-select-label-1">Brand</InputLabel>
              <Select
                labelId="demo-simple-select-label-1"
                id="demo-simple-select-1"
                value={salesModal.brandId}
                label="Brand"
                name="brandId"
                required
                onChange={handleSelectChange}
                sx={styleInput}
              >
                <MenuItem
                  sx={{ borderBottom: "1px solid black" }}
                  onClick={() => navigate("/stock/brands/")}
                >
                  Add New Brand
                </MenuItem>

                {brands?.map((brand) => (
                  <MenuItem value={brand._id} key={brand._id}>
                    {brand.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label-2">Product</InputLabel>
              <Select
                labelId="demo-simple-select-label-2"
                id="demo-simple-select-2"
                value={salesModal.productId}
                label="Product"
                name="productId"
                required
                onChange={handleSelectChange}
                sx={styleInput}
              >
                <MenuItem
                  sx={{ borderBottom: "1px solid black" }}
                  onClick={() => navigate("/stock/products/")}
                >
                  Add New Products
                </MenuItem>

                {products?.map((product) => (
                  <MenuItem value={product._id} key={product._id}>
                    {product.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Quantity"
              id="outlined-basic"
              type="number"
              value={salesModal.quantity}
              required
              onChange={handleSelectChange}
              name="quantity"
              sx={styleInput}
            />
            <TextField
              label="Price"
              id="outlined-basic"
              type="number"
              value={salesModal.price}
              required
              onChange={handleSelectChange}
              name="price"
              sx={styleInput}
            />
            <Button type="submit" variant="contained" sx={styleInput}>
              ADD PRODUCT
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
