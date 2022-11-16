import React from "react";
import { Button } from "./FormButton.styles";

interface FormButtonProps {
  isDisabled: boolean;
  children: React.ReactNode;
}

export const FormButton: React.FC<FormButtonProps> = ({ isDisabled, children }) => {
  return (
    <Button
      type="submit"
      variant="contained"
      disabled={isDisabled}
    >
      {children}
    </Button>
  );
};