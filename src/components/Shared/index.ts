import { Box, styled, Typography } from "@mui/material";
import Background from "assets/images/background.jpg";
import { Link } from "react-router-dom";

export const PageWrapper = styled(Box)({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${Background})`,
});

export const FormWrapper = styled(Box)({
  width: "40vw",
  minHeight: "80vh",
  backgroundColor: "#222",
  borderRadius: 10,
  boxShadow: "5px 5px 10px #222",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  gap: 15,
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

export const Title = styled(Typography)({
  fontSize: 26,
  fontWeight: 500,
  color: "#E7E7E7",
  margin: "10px 0 0px 0",
  "@media (max-width: 290px)": {
    fontSize: 20,
  },
});

export const Form = styled("form")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 15,
  "@media (max-width: 290px)": {
    "& .MuiFormControl-root": {
      width: "90%",
    },
  },
});

export const RegisterLink = styled(Link)({
  color: "#1976d2",
});
