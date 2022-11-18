import { InputAdornment } from "@mui/material";
import React from "react";
import { InputStyled } from "./Input.styles";

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  helperText: string;
  label: string;
  isValid: boolean;
  type: "text" | "password" | "email";
  placeholder?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  helperText,
  label,
  isValid,
  placeholder,
  icon,
  type,
}) => {
  return (
    <InputStyled
      className={!isValid ? "error" : ""}
      error={!isValid}
      helperText={!isValid ? helperText : ""}
      variant="outlined"
      type={type}
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {icon}
          </InputAdornment>
        ),
      }}
      required
    />
  );
};
