import React from "react";

const Filtros = () => {

    return (
        <>
            <div className="col-12 container bg-white border py-2 my-3 mx-3">
                <div className="row bg-white">
                    <h3 className="col-7 bg-white">Filtros</h3>
                    <h7 className="col-5 bg-white mt-2 text-primary">Ocultar Filtros</h7>
                </div>
                <div className="col-12 mt-2 bg-white input-group">
                    <label className="col-12 bg-white">Tipo</label>
                    <select className="form-select form-select-sm mt-2" aria-label="form-select-sm example">
                        <option>Ganancia</option>
                    </select>
                </div>
                <div className="col-12 mt-2 bg-white input-group">
                    <label className="col-12 bg-white">Categoria</label>
                    <select className="form-select form-select-sm mt-2" aria-label="form-select-sm example">
                        <option>Comida</option>
                    </select>
                </div>
                <div className="col-12 mt-2 bg-white input-group">
                    <label className="col-12 bg-white">Fecha</label>
                    <input type="date" className="form-control form-control-sm mt-2" aria-label="form-control-sm example" />
                </div>
                <div className="col-12 mt-2 bg-white input-group">
                    <label className="col-12 bg-white">Ordernar por</label>
                    <select className="form-select form-select-sm mt-2" aria-label="form-select-sm example">
                        <option>Ordenar por</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default Filtros;