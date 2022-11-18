import {
  AccountCircle,
  ArrowBackIos,
  Lock,
  InsertEmoticon,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
import { AlternativeOptions } from "components/AlternativeOptions";
import { FormButton } from "components/FormButton";
import { Input } from "components/Input";
import { Form, FormWrapper, PageWrapper, Title } from "components/Shared";
import React from "react";
import {
  validateEmail,
  validateLength,
  validateLowerUpperNumber,
  validateName,
  validatePassword,
  validateSequenceLength,
  validateSpecial,
} from "utils/validate";
import { BackLink, ValidationWrapper } from "./Register.styles";

export const Register: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  let isNameValid = validateName(name);
  let isEmailValid = validateEmail(email);
  let isPasswordValid = validatePassword(password);
  let isConfirmed = password === confirmPassword;
  let length = validateLength(password);
  let lowerUpperNumber = validateLowerUpperNumber(password);
  let special = validateSpecial(password);
  let sequence = validateSequenceLength(password);

  const onNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);
  const onEmailInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);
  const onPasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);
  const onConfirmPasswordInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => setConfirmPassword(event.target.value);
  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) =>
    event.preventDefault();

  return (
    <PageWrapper>
      <FormWrapper>
        <BackLink to="/">
          <ArrowBackIos />
        </BackLink>
        <Title>Crie já sua conta!</Title>
        <Form onSubmit={onFormSubmit}>
          <Input
            value={name}
            onChange={onNameInputChange}
            isValid={isNameValid}
            icon={<InsertEmoticon color="primary" />}
            type="text"
            label="Informe seu Nome"
            placeholder="Nome Sobrenome"
            helperText="Nome não pode conter números nem símbolos especiais"
          />

          <Input
            value={email}
            onChange={onEmailInputChange}
            isValid={isEmailValid}
            icon={<AccountCircle color="primary" />}
            type="email"
            label="Informe seu E-mail"
            placeholder="user@host.com"
            helperText="Email não está no padrão"
          />

          <Input
            value={password}
            onChange={onPasswordInputChange}
            isValid={isPasswordValid}
            icon={<Lock color="primary" />}
            type="password"
            label="Informe sua Senha"
            helperText="Senha não está no padrão"
          />

          <Input
            value={confirmPassword}
            onChange={onConfirmPasswordInputChange}
            isValid={isConfirmed}
            icon={<Lock color="primary" />}
            type="password"
            label="Confirme sua Senha"
            helperText="Senhas não batem"
          />

          {isPasswordValid || (
            <ValidationWrapper>
              <Typography className={length ? "valid" : "invalid"}>
                No mínimo 8 caracteres e no máximo 16.
              </Typography>
              <Typography className={lowerUpperNumber ? "valid" : "invalid"}>
                Conter letras maiúsculas, minúsculas e números.
              </Typography>
              <Typography className={special ? "valid" : "invalid"}>
                Ao menos um caracter especial.
              </Typography>
              <Typography className={sequence ? "valid" : "invalid"}>
                Não pode ter letras ou números em sequência.
              </Typography>
            </ValidationWrapper>
          )}

          <FormButton
            isDisabled={
              !isNameValid || !isEmailValid || !isPasswordValid || !isConfirmed
            }
          >
            Cadastrar
          </FormButton>
        </Form>

        <AlternativeOptions isLogin={false} />
      </FormWrapper>
    </PageWrapper>
  );
};
