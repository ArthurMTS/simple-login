import {
  ArrowBackIos,
  InsertEmoticon,
} from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import { AlternativeOptions } from "components/AlternativeOptions";
import { EmailInput } from "components/EmailInput";
import { FormButton } from "components/FormButton";
import { PasswordInput } from "components/PasswordInput";
import { UserContext } from "contexts/user";
import React from "react";
import { useNavigate } from "react-router-dom";
import { validateNumbers, validateSpecial } from "utils/validate";
import {
  FormBox,
  RegisterWrapper,
  Title,
  NameInput,
  BackLink,
  FormControl,
} from "./Register.styles";

export const Register: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const navigate = useNavigate();
  const { signUp } = React.useContext(UserContext);
  const isDisabled = 
    name === "" ||
    email === "" ||
    password === "" ||
    password !== confirmPassword;
  let isNameValid = !validateNumbers(name) && !validateSpecial(name);
  let arePasswordConfirmed = confirmPassword === password;

  const onNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);
  const onEmailInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);
  const onPasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);
  const onConfirmPasswordInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => setConfirmPassword(event.target.value);
  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
        <FormControl onSubmit={onFormSubmit}>
          <NameInput
            className={!isNameValid ? "error" : ""}
            error={!isNameValid}
            helperText={!isNameValid ? "Nome não pode conter números nem símbolos especiais" : ""}
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
            value={email}
            onChange={onEmailInputChange}
          />

          <PasswordInput
            value={password}
            onChange={onPasswordInputChange}
            label="Informe sua Senha"
            helperText="Senha não está no padrão"
          />

          <PasswordInput
            value={confirmPassword}
            onChange={onConfirmPasswordInputChange}
            helperText="Senhas não batem"
            error={arePasswordConfirmed}
            label="Confirme sua Senha"
          />

          <FormButton isDisabled={isDisabled}>
            Cadastrar
          </FormButton>

        </FormControl>

        <AlternativeOptions isLogin={false} />
        
      </FormBox>
    </RegisterWrapper>
  );
};
