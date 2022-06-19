import React from 'react'

export const DataTable = () => {
	return(
		<>
			{/*Filtrar*/}
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
		{/*Tabla de datos*/}
		</>
	);
}