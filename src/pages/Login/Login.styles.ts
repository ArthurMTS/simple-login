import { Typography } from "@mui/material";
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
});

export const Title = styled(Typography)({
  fontSize: 26,
  fontWeight: 500,
  color: "#E7E7E7",
  marginBottom: 20,
});

export const FormControl = styled("form")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 15,
});

export const LinkDescription = styled(Typography)({
  fontSize: 12,
  fontWeight: 300,
  color: "#E7E7E7",
});

export const RegisterLink = styled(Link)({
  color: "#1976d2",
});
