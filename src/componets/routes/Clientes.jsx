import React from "react";
import { Header } from "../Header";
import { Form } from "./Clientes/Formulario";
import { DataTable } from "./Clientes/DataTable";

export const Clientes = () => {
  return (
    <div>
      <Header title="Clientes" />
      <div id="contenido" className="row p-3 m-1 w-100">
        <div className="col-sm-12 col-md-4">
          <Form />
        </div>
        <div className="card col-sm-12 col-md-8 p-3">
          <DataTable data={[]} />
        </div>
      </div>
    </div>
  );
};
