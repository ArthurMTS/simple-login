import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { UserContext } from "contexts/user";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Register: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const { signUp, signIn } = React.useContext(UserContext);

  const onNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
  };
  const onEmailInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
  };
  const onPasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
  };
  const onRegisterButtonClick = () => {
    signUp(name, email, password);
    signIn(email, password);
    navigate("/");
  };

  return (
    <Box>
      <TextField
        variant="outlined"
        type="text"
        label="Enter your name"
        value={name}
        onChange={onNameInputChange}
        required
      />

      <TextField
        variant="outlined"
        type="email"
        label="Enter your E-mail"
        placeholder="user@host.com"
        value={email}
        onChange={onEmailInputChange}
        required
      />

      <TextField
        variant="outlined"
        type="password"
        label="Enter your password"
        value={password}
        onChange={onPasswordInputChange}
        required
      />

      <Button
        variant="contained"
        onClick={onRegisterButtonClick}
      >
        Register
      </Button>
    </Box>
  );
};