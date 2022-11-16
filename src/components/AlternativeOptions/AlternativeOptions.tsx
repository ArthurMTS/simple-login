import { GitHub, Google } from "@mui/icons-material";
import React from "react";
import { OptionsText, OptionsWrapper } from "./AlternativeOptions.styles";

interface AlternativeOptionsProps {
  isLogin: boolean;
}

export const AlternativeOptions: React.FC<AlternativeOptionsProps> = ({ isLogin }) => {
  return (
    <React.Fragment>
      <OptionsText>
        Você também pode realizar {isLogin ? "Login" : "o Cadastro"} por...
      </OptionsText>

      <OptionsWrapper>
        <GitHub color="primary" />
        <Google color="primary" />
      </OptionsWrapper>
    </React.Fragment>
  );
};