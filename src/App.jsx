import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MiApi from "./components/MiApi";
import Buscador from "./components/Buscador";

function App() {
  const [info, setInfo] = useState([]);

  return (
    <>
      <div className="landscapeCointainer">
        <header>
          <h1 className>Buscador de personajes</h1>
        
        </header>
        <main className="mainContainer">
          <section className="gallerySection">
            <MiApi setInfo={setInfo} />
          </section>
          <section className="headerTitle">
          <Buscador info={info} />
          </section>
        </main>
        <footer>
          <p>
            Consulta más info de Api: <br />{" "}
            <a href="https://rickandmortyapi.com/documentation"> Aquí</a>
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
