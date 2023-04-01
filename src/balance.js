import React from "react";

const Balance = () => {

    return (
        <>
            <div className="col-12 container bg-white border py-2 my-3 mx-3">
                <h3 className="bg-white">Balance</h3>
                <div className="row col-12 bg-white">
                    <p className="col-9 bg-white">Ganancia</p>
                    <p className="col-2 mx-1 bg-white">$400000</p>
                </div>
                <div className="row col-12 bg-white">
                    <p className="col-9 bg-white">Gasto</p>
                    <p className="col-2 mx-1 bg-white text-danger">$-23600</p>
                </div>
                <div className="row col-12 bg-white">
                    <p className="col-9 bg-white">Total</p>
                    <p className="col-2 mx-1 bg-white"><strong className="bg-white">$376400</strong></p>
                </div>
            </div>
        </>
    )
}

export default Balance;