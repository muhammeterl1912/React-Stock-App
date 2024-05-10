import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import { Formik, Form } from "formik";
import useStockRequest from "../services/useStockRequests";
export default function NewBrandModal({ open, setOpen,  selectedBrand,
    setSelectedBrand, }) {
  const handleClickOpen = () => {
    setSelectedBrand(null)
    setOpen(true);
    
  };
  const { createFirmsStock, updateFirmsStock } = useStockRequest();
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          backgroundColor: "black",
          color: "white",
          "&:hover": {
            backgroundColor: "black",
            transform: "scale(0.9)",
            transition: "all 0.2s ease",
          },
        }}
      >
        ADD NEW BRAND
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Formik
            initialValues={{
              name: selectedBrand?.name || "",
              image:selectedBrand?.image || "",
            }}
            onSubmit={(values, actions) => {
              if (selectedBrand && selectedBrand._id) {
                updateFirmsStock("brands",selectedBrand._id, values);
              } else {
                createFirmsStock("brands",values);
              }
              actions.resetForm();
              handleClose();
              actions.setSubmitting(false);
            }}
          >
            {({ values, handleChange, isSubmitting }) => {
              return (
                <Form>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 3,
                      padding: "25px",
                    }}
                  >
                    <TextField
                      label="Brand Name"
                      name="name"
                      id="name"
                      type="text"
                      variant="outlined"
                      value={values.name}
                      required
                      onChange={handleChange}
                    />
                    <TextField
                      label="Brand Image"
                      name="image"
                      id="image"
                      type="text"
                      variant="outlined"
                      value={values.image}
                      required
                      onChange={handleChange}
                    />

                    <Button
                      variant="contained"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      ADD FIRM
                    </Button>
                  </Box>
                </Form>
              );
            }}
          </Formik>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
