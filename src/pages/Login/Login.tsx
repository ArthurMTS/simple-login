import { AccountCircle, GitHub, Google, Lock } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import { UserContext } from "contexts/user";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  EmailInput,
  FormBox,
  LinkDescription,
  LoginButton,
  LoginOptionsText,
  LoginOptionsWrapper,
  LoginWrapper,
  PasswordInput,
  RegisterLink,
  Title,
} from "./Login.styles";

export const Login: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { signIn } = React.useContext(UserContext);
  const navigate = useNavigate();

  const onEmailInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);
  const onPasswordInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => setPassword(event.target.value);
  const onLoginButtonClick = () => {
    const user = signIn(email, password);
    if (!user?.name) return;
    navigate("/home");
  };

  return (
    <LoginWrapper>
      <FormBox>
        <Title>Acesse já sua conta!</Title>
        <EmailInput
          variant="outlined"
          type="email"
          label="Informe seu E-mail"
          placeholder="user@host.com"
          value={email}
          onChange={onEmailInputChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle color="primary" />
              </InputAdornment>
            ),
          }}
          required
        />

        <PasswordInput
          variant="outlined"
          type="password"
          label="Informe sua Senha"
          value={password}
          onChange={onPasswordInputChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock color="primary" />
              </InputAdornment>
            ),
          }}
          required
        />

        <LoginButton variant="contained" onClick={onLoginButtonClick}>
          Login
        </LoginButton>

        <LoginOptionsText>
          Você também pode realizar login por...
        </LoginOptionsText>

        <LoginOptionsWrapper>
          <GitHub color="primary" />
          <Google color="primary" />
        </LoginOptionsWrapper>

        <LinkDescription>
          Ainda não tem uma conta?{" "}
          <RegisterLink to="/register">Crie agora!</RegisterLink>
        </LinkDescription>
      </FormBox>
    </LoginWrapper>
  );
};
