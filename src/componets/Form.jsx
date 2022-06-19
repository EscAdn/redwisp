import React from "react";

export const Form = () => {
  function handleSubmit() {}

  function handleChange() {}

  function handleReset() {}

  return (
    <>
      <form
        id="formClients"
        name="formClients"
        className="card text-center p-4"
      >
        <h5 className="card-header bg-white">
          <span className="h3 fw-bold">Registro</span>
        </h5>
        <div className="card-body">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="clienteNombre"
              required
              placeholder="Nombre Completo"
            />
            <label for="clienteNombre">Nombre Completo</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="clienteTelefono"
              required
              placeholder="Teléfono"
            />
            <label for="clienteTelefono">Teléfono</label>
          </div>
          <div className="form-floating mb-3">
            <select
              className="form-select"
              id="clienteDireccion"
              aria-label="Floating label select example"
              required
            >
              <option selected defaultValue="0">
                Seleccione una opción...
              </option>
              <option defaultValue="2da del 11">2da del 11</option>
              <option defaultValue="5 de Mayo">5 de Mayo</option>
              <option defaultValue="Calzada">Calzada</option>
              <option defaultValue="Mantilla">Mantilla</option>
            </select>
            <label for="clienteDireccion">Dirección</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="date"
              className="form-control"
              id="fechaInst"
              required
            />
            <label for="clienteTelefono">Fecha Instalaciín/Registro</label>
          </div>
          <div
            id="errorForm"
            className="d-none alert-danger col-sm-12 p-2 mt-2 mb-2"
          ></div>
          <div className="row col-sm-12 mt-4 justify-content-center">
            <button
              id="limpiarform"
              className="btn col-auto btn-wisp fw-bold text-center"
            >
              <i className="fa fa-broom"></i>&nbsp;Limpiar
            </button>
            &nbsp;
            <button
              id="btnForm"
              className="fw-bold col-auto text-center btn btn-wisp"
            >
              <i className="fas fa-save"></i>&nbsp;Registrar
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
