import { styled, Button as MuiButton } from "@mui/material";

export const Button = styled(MuiButton)({
  marginTop: 0,
  fontSize: 16,
  "@media (max-width: 290px)": {
    fontSize: 14,
    padding: 5,
  },
});