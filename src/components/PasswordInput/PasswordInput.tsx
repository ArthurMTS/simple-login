import { InputAdornment } from "@mui/material";
import React from "react";
import { Lock } from "@mui/icons-material";
import { validatePassword } from "utils/validate";
import { PasswordInput as PIStyled } from "./PasswordInput.styles";

interface PasswordInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  helperText: string;
  label: string;
  error?: boolean;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChange,
  error,
  helperText,
  label,
}) => {
  let isPasswordValid = !error ? validatePassword(value) : error;

  return (
    <PIStyled
      className={!isPasswordValid ? "error" : ""}
      error={!isPasswordValid}
      helperText={!isPasswordValid ? helperText : ""}
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
