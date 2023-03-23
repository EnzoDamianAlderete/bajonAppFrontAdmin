import {
  Box,
  Button,
  FormControlLabel,
  Link,
  Paper,
  Radio,
  TextField,
} from "@mui/material";
import React from "react";
import "./login.css";

const Register = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignContent: "center",
        flexDirection: "column",
        p: 2,
      }}
    >
      {/* <Paper
          sx={{
            elevation: 3,
            background: "#FCFCFC",
            width: "100%",
            height: "100%",
          }}
        /> */}
      <div className="div2">
        <h1>Register your account</h1>
      </div>
      <TextField
        margin="normal"
        id="outlined-basic"
        label="Usuario"
        variant="outlined"
      />

      <TextField
        margin="normal"
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <TextField
        margin="normal"
        id="outlined-password-input"
        label="Confirm Password"
        type="password"
        autoComplete="current-password"
      />

      <div className="div2">
        <FormControlLabel
          //checked={selectedValue === "a"}
          //onChange={handleChange}
          value="a"
          name="radio"
          control={<Radio />}
          inputProps={{ "aria-label": "A" }}
          label="Mantener conectado"
          labelPlacement="End"
        />
        <Link href="#" underline="hover" color="blue">
          {"Recuperar contraseña"}
        </Link>
      </div>
      <div className="div3buton">
        <Button
          variant="contained"
          sx={(thema) => ({
            background: thema.palette.primary.light,
            "&:hover": { background: "#0094F1" },
            width: "100%",
          })}
        >
          Confirm
        </Button>
      </div>
    </Box>
  );
};
export default Register;
