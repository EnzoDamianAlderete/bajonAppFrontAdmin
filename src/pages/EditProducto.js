import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormProducto from "../components/formProducto";


const EditProducto = () => {
  
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(()=>{
    axios.get('http://localhost:3100/products')
   .then((res)=>{
      console.log(res);
   })
   .catch((error)=>{
       console.error(error);
   });
  },[]);

  // useEffect(() => {
  //   if (id) {
  //     const idNum = parseInt(id);
  //     //TODO: CUANDO ESTE LA API ACA VA EL BUSCAR EL PRODUCTO POR ID
  //     const target = productos.find((producto) => producto.id === idNum);
  //     if (target) {
  //       setProducto(target);
  //     }
  //   }
  // }, [id]);

  const onSubmit = (nuevoProducto) => {
    alert(JSON.stringify(nuevoProducto));
  };

  if (producto) {
    return (
      <div>
        <FormProducto producto={producto} onSubmit={onSubmit}></FormProducto>
      </div>
    );
  }
  return <div>no existe</div>;
};
export default EditProducto;
