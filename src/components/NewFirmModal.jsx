import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import { Formik, Form } from "formik";
import useStockRequest from "../services/useStockRequests";

export default function NewFirmModal({
  open,
  setOpen,
  selectedFirm,
  setSelectedFirm,
}) {
  const { createFirmsStock, updateFirmsStock } = useStockRequest();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedFirm(null);
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
        ADD NEW FIRM
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Formik
            initialValues={{
              name: selectedFirm?.name || "",
              phone: selectedFirm?.phone || "",
              address: selectedFirm?.address || "",
              image: selectedFirm?.image || "",
            }}
            onSubmit={(values, actions) => {
              if (selectedFirm && selectedFirm._id) {
                updateFirmsStock(selectedFirm._id, values);
              } else {
                createFirmsStock(values);
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
                      label="Firm Name"
                      name="name"
                      id="name"
                      type="text"
                      variant="outlined"
                      value={values.name}
                      required
                      onChange={handleChange}
                    />
                    <TextField
                      label="Phone"
                      name="phone"
                      id="phone"
                      type="text"
                      variant="outlined"
                      value={values.phone}
                      required
                      onChange={handleChange}
                    />
                    <TextField
                      label="Address"
                      name="address"
                      id="address"
                      type="text"
                      variant="outlined"
                      required
                      value={values.address}
                      onChange={handleChange}
                    />
                    <TextField
                      label="Image"
                      name="image"
                      id="image"
                      type="url"
                      variant="outlined"
                      required
                      value={values.image}
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
