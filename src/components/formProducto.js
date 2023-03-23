import React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Box, Button, Grid, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveIcon from "@mui/icons-material/Save";
import "./formProducto.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FormProducto = ({  }) => {
  // const [nombre, setNombre] = useState(producto?.nombreProducto ?? "");
  // const [descripcion, setDescripcion] = useState(producto?.descripcion ?? "");
  // const [category, setcategory] = useState(producto?.category ?? "");
  // const [precio, setPrecio] = useState(producto?.precio ?? "");
  // const [stock, setStock] = useState(producto?.stock ?? "");
  //const navigate = useNavigate();

  const [mensaje,setMensaje] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  // const handleSubmit = () => {
  //   onSubmit({ nombre, descripcion, category, precio, stock });
  // };
  const onUploadImage = () => alert("Cargar Imagen");

  
    // ------------ MI ADAPACION --------------------
const [inputs ,setInputs ] = useState({
  name_product:"",
  description_product:"",
  category:"",
  price:"",
  stock:"",
});
const {name_product, description_product, category, price, stock} = inputs;

const HandleChange=(e)=>{
  setInputs({...inputs, [e.target.name]: e.target.value});
}

const onSubmit = async(e)=>{
  e.preventDefault();
  if(name_product ==="" && category ===''){
      setMensaje("Por favor complete todos los campos");
          setTimeout(()=>{
              setMensaje("");
          },3000);
  } else if(name_product !=="" && category !==''){
      const Product = {
        name_product,
        description_product,
        category,
        price,
        stock
      };
      console.log(inputs);
      console.log(Product);
      setLoading(true);
      await axios.post('http://localhost:3100/product',Product)
      .then((res)=>{
          const {data} =res;
          setMensaje(data.mensaje);
          setTimeout(()=>{
              setMensaje("");
              navigate("/stock");
              alert('se agrego producto!!');
          },1500);
      })
      .catch((error)=>{
          console.error(error);
          setMensaje("Hubo un error");
          setTimeout(()=>{
              setMensaje("");
          },3000);
      });
      setInputs({ name_product:"",description_product:"" ,category:"",price:"",stock:"" });
      setLoading(false);
  }
}
// ------------ MI ADAPACION --------------------

  return (
    <form onSubmit={(e)=> onSubmit(e)}>
    <Grid>
      <div className="headform">
        <IconButton onClick={() => navigate("/tabla")}>
          <ArrowBackIcon />
        </IconButton>
        {/* {producto ? <h1>Editar Producto </h1> : <h1>Agregar Producto </h1> } */}
        <h1>Agregar Producto </h1>
      </div>
      <Grid
        sx={{
          border: 2,
          borderRadius: "8px",
          borderColor: "#e5e7eb",
        }}
      >
        <div className="camposprod">
          <div className="divAdd">
            <Box
              component="img"
              sx={{
                height: 164,
                width: 164,
                borderRadius: "100%",
                "&:hover": { background: "#D9F0FF" },
              }}
              src="addimage.jpg"
              onClick={onUploadImage}
              required
            />
            <h2>Add Image</h2>
          </div>
          
          <TextField
            onChange={(e) => HandleChange(e)}//CAMBIO
            value={name_product}
            name="name_product"
            required
            id="name_product"
            label="Nombre"
          />
          { <TextField
            onChange={(e) => HandleChange(e)}//CAMBIO
            value= {description_product}
            name="description_product"
            required 
            id="description_product"
            label="Descripcion"
            multiline
            rows={4}
          /> }
          <TextField
            onChange={(e) => HandleChange(e)}//CAMBIO
            value={category}
            name="category"
            required
            id="outlined-required"
            label="category"
          />
          <TextField
            onChange={(e) => HandleChange(e)}//CAMBIO
            value={price}
            name="price"
            required
            id="outlined-required"
            label="Precio"
          />
          <TextField
            onChange={(e) => HandleChange(e)}//CAMBIO
            value={stock}
            name="stock"
            required
            id="outlined-required"
            label="Stock"
          />
        </div>
      </Grid>
      <div className="divboton">
        <Button
          type="submit"
          startIcon={<SaveIcon />}
          size="large"
          variant="contained"
          sx={(thema) => ({
            background: thema.palette.primary.light,
            "&:hover": { background: "#0094F1" },
          })}
          //onClick={handleSubmit}  CAMBIO
        >
          {/* {producto ? "Editar" : "Agregar Producto"} CAMBIO */}
          Agregar
        </Button>
      </div>
    </Grid>
    </form>
  );
};
export default FormProducto;
