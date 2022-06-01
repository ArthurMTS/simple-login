import { Home } from "pages/Home";
import { Login } from "pages/Login";
import { Register } from "pages/Register";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};