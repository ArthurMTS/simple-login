import { TextField, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Link } from "react-router-dom";
import Background from "assets/images/background.jpg";

export const RegisterWrapper = styled(Box)({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${Background})`,
});

export const FormBox = styled(Box)({
  width: "40vw",
  backgroundColor: "#222",
  borderRadius: 10,
  boxShadow: "5px 5px 10px #222",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 15,
  position: "relative",
  "@media (max-width: 800px)": {
    width: "60vw",
  },
  "@media (max-width: 540px)": {
    width: "80vw",
  },
  "@media (max-width: 380px)": {
    width: "100vw",
    height: "100vh",
    borderRadius: 0,
  },
});

export const BackLink = styled(Link)({
  color: "#1976d2",
  position: "absolute",
  top: 15,
  left: 20,
  transition: "all 0.2s",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

export const Title = styled(Typography)({
  fontSize: 26,
  fontWeight: 500,
  color: "#E7E7E7",
  margin: "10px 0 0px 0",
  "@media (max-width: 290px)": {
    fontSize: 20,
  },
});

export const FormControl = styled("form")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  "@media (max-width: 290px)": {
    "& .MuiFormControl-root": {
      width: "90%",
    },
  },
});

export const NameInput = styled(TextField)({
  width: "80%",
  "& .MuiInputBase-input": {
    color: "#F7F7F7",
  },
  "& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root": {
    color: "#1976d2",
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
  "&.error .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root": {
    color: "#ff0000 !important",
  },
  "&.error .MuiSvgIcon-root": {
    color: "#ff0000 !important",
  },
  "&.error .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#ff0000 !important",
    },
    "&:hover fieldset": {
      borderColor: "#ff0000 !important",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ff0000 !important",
    },
  },
});

export const RegisterLink = styled(Link)({
  color: "#1976d2",
});

export const ValidationWrapper = styled(Box)({
  "& p": {
    fontSize: 12,
    fontWeigth: 10,
    color: "#E7E7E7",
  },
  "& .valid": {
    color: "#00FF00",
  },
  "& .invalid": {
    color: "#FF0000",
  },
});
