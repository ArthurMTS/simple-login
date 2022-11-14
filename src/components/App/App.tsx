import { Router } from "components/Router";
import { UserProvider } from "contexts/user";
import React from "react";

export const App: React.FC = () => (
  <UserProvider>
    <Router />
  </UserProvider>
);
