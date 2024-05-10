import React from "react";
import { useSelector } from "react-redux";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from "@mui/material/IconButton";
import useStockRequest from "../services/useStockRequests";
import ProductNewModal from "./ProductNewModal";
export default function ProductsTable() {
  const products = useSelector((state) => state.stock.products);
  const { deleteFirmsStock } = useStockRequest();
  if (!products || !Array.isArray(products)) {
    return <div>No products found</div>;
  }


  const mappedProducts = products.map((item) => ({
    id: item._id,
    _id: item._id,
    category_name: item.categoryId ? item.categoryId.name : "Unknown",
    brand_name: item.brandId ? item.brandId.name : "Unknown",
    name: item.name,
    stock: item.quantity,
    delete: (
      <IconButton
        size="small"
        onClick={() => deleteFirmsStock("products",item._id)}
      >
        <DeleteForeverIcon
          sx={{
            "&:hover": { color: "red" },
            transition: "color 0.4s ease",
          }}
        />
      </IconButton>
    )
  }));

  return (
    <div style={{ height: 500, width: "100%" }}>
    <ProductNewModal/>
      <DataGrid
        columns={[
          { field: "_id", headerName: "ID", hideable: false },
          { field: "category_name", headerName: "Category" },
          { field: "brand_name", headerName: "Brand" },
          { field: "name", headerName: "Name" },
          { field: "stock", headerName: "Stock" },
          { field: "delete", headerName: "Delete", renderCell: (params) => params.value }, // Render the delete button
        ]}
        rows={mappedProducts}
        rowHeight={45}
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </div>
  );
}
