import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import { Clientes } from "./componets/routes/Clientes";
import { Contratos } from "./componets/routes/Contratos";
import { Planes } from "./componets/routes/Planes";
import { Gastos } from "./componets/routes/Gastos";
import { Usuarios } from "./componets/routes/Usuarios";
import { Inicio } from "./componets/routes/Inicio";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Inicio />} />
        <Route path="clientes" element={<Clientes />} />
        <Route path="contratos" element={<Contratos />} />
        <Route path="planes" element={<Planes />} />
        <Route path="gastos" element={<Gastos />} />
        <Route path="usuarios" element={<Usuarios />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
