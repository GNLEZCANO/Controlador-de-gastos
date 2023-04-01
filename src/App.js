import React from "react";
import "./assets/syles/styles.css";
import Operaciones from "./operaciones";
import Filtros from "./filtros";
import Balance from "./balance";
import Navbar from "./navbar";

function App() {

  return (
      <>
          <Navbar />
          <div className="container">
              <div className="row justify-content-md-center mt-3">
                  <div className="col-4">
                      <Balance />
                      <Filtros />
                  </div>
                  <div className="col-8">
                      <Operaciones />
                  </div>
              </div>
          </div>
      </>
  );
}

export default App;
