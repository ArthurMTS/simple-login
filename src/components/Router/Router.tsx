import { Login } from "pages/Login";
import { Register } from "pages/Register";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);
