import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import useStockRequest from "../services/useStockRequests";
import { useSelector } from "react-redux";


export default function BrandsAll({ setOpen, setSelectedBrand}) {
  const brandsData = useSelector((item) => item.stock.brands);
  const { deleteFirmsStock } = useStockRequest();

  const handleFirmClick = (selectedFirm) => {
    setSelectedBrand(selectedFirm);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1.5rem",
        justifyContent: "center",
        marginTop:"7px"
      }}
    >
      {brandsData?.map((brand) => (
        <Card
          key={brand._id}
         onClick={() => handleFirmClick(brand)}
          sx={{
            maxWidth: 345,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {brand.name}
          </Typography>
        
          <CardMedia
            component="img"
            alt="green iguana"
            width="100%"
            sx={{ objectFit: "contain", maxHeight: "140px", height: "140px" }}
            image={brand.image}
          />
          <CardActions>
            <IconButton
              size="small"
              onClick={() => {
                setOpen((open) => !open);
              }}
            >
              <EditIcon
                sx={{
                  "&:hover": { color: "red" },
                  transition: "color 0.4s ease",
                }}
              />
            </IconButton>
            <IconButton size="small" onClick={() => deleteFirmsStock("brands",brand._id)}>
              <DeleteIcon
                sx={{
                  "&:hover": { color: "red" },
                  transition: "color 0.4s ease",
                }}
              />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
