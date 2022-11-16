import { Box, styled, Typography } from "@mui/material";

export const OptionsText = styled(Typography)({
  fontSize: 16,
  fontWeight: 500,
  color: "#E7E7E7",
});

export const OptionsWrapper = styled(Box)({
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