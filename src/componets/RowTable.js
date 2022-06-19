import React from "react";

export const RowTable = ({ lis }) => {
  return (
    <tr>
      <td>lis.id</td>
      <td>lis.nombre</td>
      <td>lis.telefono</td>
      <td>lis.direccion</td>
      <td>lis.fecha_registro</td>
      <td>
        <button id="ver" className="btn btn-sm btn-outline-wisp">
          <i className="fas fa-eye"></i>
        </button>
        <button id="editar" className="btn btn-sm btn-outline-wisp">
          <i className="fas fa-edit"></i>
        </button>
      </td>
    </tr>
  );
};
