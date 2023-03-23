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
import { productos } from "../pages/EditProducto";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

export default function Tabla() {
  const navigate = useNavigate();
  const onEditProducto = (id) => {
    navigate(`/editproducto/${id}`);
  };
  

  const [listaProducto, setListaProducto] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const eliminar = (id) => {
    //to do hacer la llamada p eliminar un prod con id
    const listadoActual = [...listaProducto];
    const nuevoListado = listadoActual.filter((item) => {
      return item.id !== id;
    });
    setListaProducto(nuevoListado);
  };

  React.useEffect(() => {
    //to do hacer la llamada p obtener los prod de la bd
    axios.get('http://localhost:3100/products')
   .then((res)=>{
     const products = res.data;
     setProducts(products);
   })
   .catch((error)=>{
       console.error(error);
   });
    
  }, []);

  console.log(products);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    // {
    //   field: "imagen ",
    //   headerName: "Imagenn",
    //   width: 80,
    //   renderCell: (params) => <Avatar src={params.row.imagen} />,
    // },
    {
      field: "name_product",
      headerName: "Producto",
      width: 200,
    },
    {
      field: "description_product",
      headerName: "Descripcion",
      width: 280,
    },
    {
      field: "category",
      headerName: "Categoria",
      width: 160,
    },
    {
      field: "price",
      headerName: "Precio",
      width: 160,
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 160,
    },
    {
      field: "acciones",
      type: "actions",
      headerName: "Acciones",
      width: 160,
      cellClassName: "actions",
      renderCell: (params) => (
        <div>
          <IconButton onClick={() => onEditProducto(params.row.id)}>
            <EditIcon src={params.row.imagen} />{" "}
          </IconButton>
          <IconButton onClick={() => eliminar(params.row.id)}>
            <DeleteIcon src={params.row.imagen} />{" "}
          </IconButton>
        </div>
      ),
    },
  ];
  
  return (
    <Box sx={{ height: "90%", width: "100%" }}>
      <div className="headtabla">
        <Typography>Tabla productos</Typography>
        <Search></Search>
        
        <Button
          startIcon={<AddIcon />}
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
        rows={products}
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
