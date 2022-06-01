import { Router } from "components/Router";
import { UserProvider } from "contexts/user";
import React from "react";

export const App: React.FC = () => {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
};