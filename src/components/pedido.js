import { Button, Grid, Paper, Divider } from "@mui/material";
import React from "react";
import {} from "./pedido.css";

const Pedidos = ({order}) => {
  return (
    <Grid container sx={{ p: 2 }} spacing={4}>
      <Grid item md={6} xs={12} lg={3} zeroMinWidth>
        <Paper
          sx={{
            background: "#FCFCFC",
            width: "100%",
            height: "100%",
            p: 2,
          }}
        >
          <div className="cabecera">
            <div className="headpedido">
              <h1>Nombre usuario:{order.name_user}</h1>
              <h3>Horario del pedido: {order.date}</h3>
            </div>
            <div className="numorden">
              <h2>Num de orden {order._id}</h2>
            </div>
          </div>
          <div className="pedido">
            <div>
              <div className="imgnom">
                <div className="imagen">
                  <img src="/burger2.jpg" />
                </div>
                <div>
                  <h1>Nombre producto</h1>
                  <h2>
                    Descripcion x ej si el cliente no quiere x ej mayonesa o
                    alguna observacion
                  </h2>
                </div>
              </div>
            </div>
            <div className="precioycant">
              <div>Precio: $${order.price}</div>
              <div>Cantidad:{order._id}</div>
            </div>
          </div>
          
          <Divider sx={{ pt: 2 }} />
          <div className="total">Total:{order.price}</div>
          <div className="boton">
            <Button
              variant="contained"
              sx={(thema) => ({
                background: thema.palette.primary.light,
                "&:hover": { background: "#0094F1" },
              })}
            >
              Confirmar Pedido
            </Button>
          </div>
        </Paper>
      </Grid>
      
    </Grid>
  );
};
export default Pedidos;
