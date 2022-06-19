import React from "react";
import { RowTable } from "./RowTable";

export const DataTable = ({ data }) => {
  return (
    <>
      {/*  Filtrar  */}
      <div className="row d-flex">
        <div className="row col-sm-12" action="">
          <label for="inputSearch" className="col-2 col-form-label fw-bold">
            Buscar
          </label>
          <div className="col-10">
            <input
              id="inputSearch"
              className="form-control"
              type="text"
              placeholder="Nombre clientes, Dirección IP, Nombre del plan"
            />
          </div>
        </div>
      </div>
      {/* Table */}
      <div className="mt-4 col-12 p-2 h-max scroll overflow-auto">
        <table className="table table-responsive table-hover shadow p-3 mb-2 bg-body">
          <thead>
            <tr className="bg-personalizado">
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Direccíon</th>
              <th scope="col">Registro</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          {data.length === 0 ? (
            <tr>
              <td colSpan="6">
                <div id="loader" className="text-center">
                  <div
                    className="spinner-grow text-primary ms-auto"
                    role="status"
                    aria-hidden="true"
                  ></div>
                </div>
              </td>
            </tr>
          ) : (
            <tbody id="bodyTable" className="d-none">
              {data.map((el) => (
                <RowTable lis={el} />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};
