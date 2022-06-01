import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { UserContext } from "contexts/user";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const { signIn } = React.useContext(UserContext);

  const onEmailInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
  };
  const onPasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
  };
  const onLoginButtonClick = () => {
    const user = signIn(email, password);
    if (user?.email === email)
      navigate("/");
  };

  return (
    <Box>
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
        onClick={onLoginButtonClick}
      >
        Login
      </Button>
    </Box>
  );
};