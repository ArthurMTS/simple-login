import { Box, styled } from "@mui/material";
import { Link } from "react-router-dom";

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
