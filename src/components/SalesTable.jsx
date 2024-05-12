import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useStockRequests from "../services/useStockRequests";
import { useSelector } from "react-redux";

export default function ProductTable() {
  const { deleteFirmsStock } = useStockRequests();
  const { sales } = useSelector((state) => state.stock);
  const getRowId = (row) => row._id;

  const columns = [
    {
      field: "createdAd",
      headerName: "Date",
      flex: 1,
      minWidth: 100,
      valueGetter: (value, row) => new Date(row.createdAt).toLocaleString(),
    },

    {
      field: "brandId",
      headerName: "Brand",
      flex: 1,
      minWidth: 100,
      valueGetter: (value, row) => row.brandId?.name,
    },
    {
      field: "productId",
      headerName: "Product",
      headerAlign: "center",
      align: "center",
      width: 150,
      flex: 1.2,
      editable: true,
      valueGetter: (value, row) => row.productId?.name,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      headerAlign: "center",
      align: "center",
      flex: 1.1,
      miWidth: 110,
      editable: true,
      valueGetter: (value, row) => row?.quantity,
    },
    {
      field: "amount",
      headerName: "Amount",
      sortable: true,
      headerAlign: "center",
      align: "center",
      width: 160,
      valueGetter: (value, row) => row?.amount,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Operations",
      getActions: (props) => {
        return [
          <GridActionsCellItem
            icon={
              <DeleteForeverIcon
                sx={{
                  "&:hover": { color: "red" },
                  transition: "color 0.4s ease",
                }}
              />
            }
            onClick={() => deleteFirmsStock("sales", props.id)}
            label="Delete"
          />,
        ];
      },
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        autoHeight
        rows={sales}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 6,
            },
          },
        }}
        pageSizeOptions={[6]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={getRowId}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}
