import React from "react";

const Operaciones = () => {

    return (
        <>
            <div className="col-12 row container bg-white border py-2 my-3 mx-1">
                <h3 className="col-9 bg-white">Operaciones</h3>
                <button type="button" className="col-3 mt-1 btn btn-primary btn-sm h-50">+ Nueva operación</button>
                <div className="col-12 row mt-3 bg-white">
                    <p className="col-3 bg-white"><strong className="bg-white">Descripción</strong> </p>
                    <p className="col-3 bg-white"><strong className="bg-white">Categoría</strong> </p>
                    <p className="col-2 bg-white"><strong className="bg-white">Fecha</strong> </p>
                    <p className="col-2 bg-white"><strong className="bg-white">Monto</strong> </p>
                    <p className="col-2 bg-white"><strong className="bg-white">Acciones</strong> </p>
                </div>
            </div>
        </>
    )
}

export default Operaciones;