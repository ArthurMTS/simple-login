import { AlternativeOptions } from "components/AlternativeOptions";
import { EmailInput } from "components/EmailInput";
import { FormButton } from "components/FormButton";
import { PasswordInput } from "components/PasswordInput";
import React from "react";
import { validateEmail, validatePassword } from "utils/validate";
import {
  FormBox,
  LinkDescription,
  LoginWrapper,
  RegisterLink,
  Title,
  FormControl
} from "./Login.styles";

export const Login: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const { signIn } = React.useContext(UserContext);
  // const navigate = useNavigate();
  let isEmailValid = validateEmail(email);
  let isPasswordValid = validatePassword(password);

  const onEmailInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);
  const onPasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);
  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //const user = signIn(email, password);
    // if (!user?.name) return;
    // navigate("/home");
  };

  return (
    <LoginWrapper>
      <FormBox>
        <FormControl onSubmit={onFormSubmit}>
          <Title>Acesse já sua conta!</Title>
          
          <EmailInput
            value={email}
            onChange={onEmailInputChange}
            isValid={isEmailValid}
          />

          <PasswordInput
            value={password}
            onChange={onPasswordInputChange}
            label="Informe sua Senha"
            helperText="Senha não está no padrão"
            isValid={isPasswordValid}
          />

          <FormButton isDisabled={!isEmailValid || !isPasswordValid}>
            Login
          </FormButton>
        </FormControl>

        <AlternativeOptions isLogin={true} />

        <LinkDescription>
          Ainda não tem uma conta?{" "}
          <RegisterLink to="/register">Crie agora!</RegisterLink>
        </LinkDescription>
      </FormBox>
    </LoginWrapper>
  );
};
