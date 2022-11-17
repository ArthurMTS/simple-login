import { InputAdornment } from "@mui/material";
import React from "react";
import { Lock } from "@mui/icons-material";
import { PasswordInput as PIStyled } from "./PasswordInput.styles";

interface PasswordInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  helperText: string;
  label: string;
  isValid: boolean;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChange,
  helperText,
  label,
  isValid,
}) => {
  return (
    <PIStyled
      className={!isValid ? "error" : ""}
      error={!isValid}
      helperText={!isValid ? helperText : ""}
      variant="outlined"
      type="password"
      label={label}
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Lock color="primary" />
          </InputAdornment>
        ),
      }}
      required
    />
  );
};
