import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import { Formik, Form } from "formik";
import useApiRequests from "../services/useApiRequests";

export default function NewFirmModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { createFirm } = useApiRequests();
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

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogContent>
          <Formik
            initialValues={{ firm_name: "", phone: "", address: "", image: "" }}
            onSubmit={(values, actions) => {
              console.log(values)
              createFirm(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
          >
            {({
              values,
              handleChange,

              isSubmitting,
            }) => (
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
                    name="firm_name"
                    id="firm_name"
                    type="text"
                    variant="outlined"
                    value={values.firm_name}
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
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
