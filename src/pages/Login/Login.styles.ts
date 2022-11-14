import { Button, TextField, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Link } from "react-router-dom";
import Background from "assets/images/background.jpg";

export const LoginWrapper = styled(Box)({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${Background})`,
});

export const FormBox = styled(Box)({
  width: "40vw",
  height: "80vh",
  backgroundColor: "#222",
  borderRadius: 10,
  boxShadow: "5px 5px 10px #222",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 15,
  "& .MuiTextField-root": {
    width: "80%",
    "& .MuiInputBase-input::placeholder": {
      color: "#F7F7F7",
    },
    "& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
      color: "#F7F7F7",
    },
    "& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root": {
      color: "#1976d2",
    },
    "& label.Mui-focused": {
      color: "#1976d2",
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'yellow',
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#F7F7F7",
      },
      "&:hover fieldset": {
        borderColor: "#1976d2",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1976d2",
      },
    },
  },
});

export const Title = styled(Typography)({
  fontSize: 26,
  fontWeight: 500,
  color: "#E7E7E7",
  marginBottom: 20,
});

export const EmailInput = styled(TextField)({
  "& .MuiInputBase-input": {
    color: "#F7F7F7",
  },
});

export const PasswordInput = styled(TextField)({
  "& .MuiInputBase-input": {
    color: "#F7F7F7",
  },
});

export const LoginButton = styled(Button)({
  width: "100px",
  marginTop: 20,
  fontSize: 18,
});

export const LoginOptionsText = styled(Typography)({
  fontSize: 16,
  fontWeight: 500,
  color: "#E7E7E7",
});

export const LoginOptionsWrapper = styled(Box)({
  display: "flex",
  gap: 10,
  "& .MuiSvgIcon-root": {
    width: 35,
    height: 35,
    cursor: "pointer",
  },
  "& .MuiSvgIcon-root:hover": {
    transform: "scale(1.05)",
  },
});

export const LinkDescription = styled(Typography)({
  fontSize: 12,
  fontWeight: 300,
  color: "#E7E7E7",
});

export const RegisterLink = styled(Link)({
  color: "#1976d2",
});
