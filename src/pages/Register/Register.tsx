import {
  AccountCircle,
  ArrowBackIos,
  GitHub,
  Google,
  InsertEmoticon,
  Lock,
} from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import { UserContext } from "contexts/user";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  EmailInput,
  FormBox,
  RegisterButton,
  RegisterOptionsText,
  RegisterOptionsWrapper,
  RegisterWrapper,
  PasswordInput,
  Title,
  NameInput,
  BackLink,
} from "./Register.styles";

export const Register: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const navigate = useNavigate();
  const { signUp } = React.useContext(UserContext);

  const onNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);
  const onEmailInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);
  const onPasswordInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => setPassword(event.target.value);
  const onConfirmPasswordInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => setConfirmPassword(event.target.value);
  const onRegisterButtonClick = () => {
    signUp(name, email, password);
    navigate("/");
  };

  return (
    <RegisterWrapper>
      <FormBox>
        <BackLink to="/">
          <ArrowBackIos />
        </BackLink>
        <Title>Crie já sua conta!</Title>
        <NameInput
          variant="outlined"
          type="text"
          label="Informe seu Nome"
          placeholder="Nome Sobrenome"
          value={name}
          onChange={onNameInputChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <InsertEmoticon color="primary" />
              </InputAdornment>
            ),
          }}
          required
        />
        
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

        <PasswordInput
          variant="outlined"
          type="password"
          label="Confirme sua Senha"
          value={confirmPassword}
          onChange={onConfirmPasswordInputChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock color="primary" />
              </InputAdornment>
            ),
          }}
          required
        />

        <RegisterButton variant="contained" onClick={onRegisterButtonClick}>
          Cadastrar
        </RegisterButton>

        <RegisterOptionsText>
          Você também pode realizar o Cadastro por...
        </RegisterOptionsText>

        <RegisterOptionsWrapper>
          <GitHub color="primary" />
          <Google color="primary" />
        </RegisterOptionsWrapper>
      </FormBox>
    </RegisterWrapper>
  );
};
