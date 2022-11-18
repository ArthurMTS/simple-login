import { AlternativeOptions } from "components/AlternativeOptions";
import { FormButton } from "components/FormButton";
import { Input } from "components/Input";
import { AccountCircle, Lock } from "@mui/icons-material";
import React from "react";
import { validateEmail, validatePassword } from "utils/validate";
import { LinkDescription } from "./Login.styles";
import { Form, FormWrapper, PageWrapper, RegisterLink, Title } from "components/Shared";

export const Login: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  let isEmailValid = validateEmail(email);
  let isPasswordValid = validatePassword(password);

  const onEmailInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);
  const onPasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);
  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) =>
    event.preventDefault();

  return (
    <PageWrapper>
      <FormWrapper>
        <Form onSubmit={onFormSubmit}>
          <Title>Acesse já sua conta!</Title>
          
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

          <FormButton isDisabled={!isEmailValid || !isPasswordValid}>
            Login
          </FormButton>
        </Form>

        <AlternativeOptions isLogin={true} />

        <LinkDescription>
          Ainda não tem uma conta?{" "}
          <RegisterLink to="/register">Crie agora!</RegisterLink>
        </LinkDescription>
      </FormWrapper>
    </PageWrapper>
  );
};
