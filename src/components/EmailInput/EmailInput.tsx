import { AccountCircle } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import React from "react";
import { validateEmail } from "utils/validate";
import { EmailInput as EIStyled } from "./EmailInput.styles";

interface EmailInputProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const EmailInput: React.FC<EmailInputProps> = ({
  value,
  onChange,
}) => {
  let isEmailValid = validateEmail(value);

  return (
    <EIStyled
    className={!isEmailValid ? "error" : ""}
    error={!isEmailValid}
    helperText={!isEmailValid ? "Email não está no padrão" : ""}
    variant="outlined"
    type="email"
    label="Informe seu E-mail"
    placeholder="user@host.com"
    value={value}
    onChange={onChange}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <AccountCircle color="primary" />
        </InputAdornment>
      ),
    }}
    required
  />
  );
};
