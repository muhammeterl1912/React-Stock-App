import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useStockRequests from "../services/useStockRequests";
import { useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

export default function PurchaseTable({  setPurchaseModal, setOpen,  setModalId}) {
  const { deleteFirmsStock} = useStockRequests();
  const { purchases } = useSelector((state) => state.stock);
  const getRowId = (row) => row._id;

  const columns = [
    {
      field: "createdAt",
      headerName: "Date",
      flex: 1,
      minWidth: 100,
      valueGetter: (value, row) => new Date(row.createdAt).toLocaleString(),
    },
    {
        field: "firmId",
        headerName: "Firm",
        flex: 1,
        minWidth: 100,
        valueGetter: (value, row) =>row.firmId?.name,
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
        field: "price",
        headerName: "Price",
        sortable: true,
        headerAlign: "center",
        align: "center",
        width: 160,
        valueGetter: (value, row) => row?.price,
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
          <IconButton
            size="small"
            onClick={() => {
               setPurchaseModal({ firmId: props.row.firmId._id,
                brandId: props.row.brandId._id,
                productId: props.row.productId._id,
                quantity: props.row.quantity,
                price: props.row.amount,
              });
              setModalId(props.id)
              setOpen((open) => !open);
            }}
          >
            <EditIcon
              sx={{
                "&:hover": { color: "red" },
                transition: "color 0.4s ease",
              }}
            />
          </IconButton>,
          <GridActionsCellItem
            icon={
              <DeleteForeverIcon
                sx={{
                  "&:hover": { color: "red" },
                  transition: "color 0.4s ease",
                }}
              />
            }
            onClick={() => deleteFirmsStock("purchases", props.id)}
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
        rows={purchases }
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
