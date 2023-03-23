import * as React from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import "./tabla.css";
import Search from "./search";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "imagen ",
    headerName: "Imagen",
    width: 80,
    renderCell: (params) => <Avatar src={params.row.imagen} />,
  },
  {
    field: "nombreProducto",
    headerName: "Producto",
    width: 200,
    editable: true,
  },
  {
    field: "descripcion",
    headerName: "Descripcion",
    width: 280,
    editable: true,
  },
  {
    field: "categoria",
    headerName: "Categoria",
    width: 160,
    editable: true,
  },
  {
    field: "precio",
    headerName: "Precio",
    width: 160,
    editable: true,
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 160,
    editable: true,
  },
  {
    field: "acciones",
    type: "actions",
    headerName: "Acciones",
    width: 160,
    cellClassName: "actions",
    renderCell: (params) => (
      <div>
        <IconButton>
          <EditIcon src={params.row.imagen} />{" "}
        </IconButton>
        <IconButton>
          <DeleteIcon src={params.row.imagen} />{" "}
        </IconButton>
      </div>
    ),
  },
];

const rows = [
  {
    id: 1,
    imagen: "/burger2.jpg",
    nombreProducto: "VIENE DE ACA??",
    descripcion: "Tomate lechuga huevo",
    categoria: "Hamburguesas",
    precio: 500,
  },
  {
    id: 2,
    imagen: "/burger3.jpg",
    nombreProducto: "Hamburguesa 2",
    descripcion: "Tomate lechuga huevo VIENE DE ACA??",
    categoria: "Hamburguesas",
    precio: "$1000",
  },
];

export default function Tabla() {
  const navigate = useNavigate();

  return (
    <Box sx={{ height: "90%", width: "100%" }}>
      <div className="headtabla">
        <Typography>Tabla productos</Typography>
        <Search></Search>
        <Button
          variant="contained"
          sx={(thema) => ({
            background: thema.palette.primary.light,
            "&:hover": { background: "#0094F1" },
          })}
          onClick={() => navigate("/addproduct")}
        >
          Agregar Producto
        </Button>
      </div>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
