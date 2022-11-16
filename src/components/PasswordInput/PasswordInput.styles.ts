import { styled, TextField } from "@mui/material";

export const PasswordInput = styled(TextField)({
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