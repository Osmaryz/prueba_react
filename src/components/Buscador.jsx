import React from 'react'
import { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';

const Buscador = ({ info }) => {
    const [inputInfo, setInputInfo] = useState("");
    const [filteredInfo, setFilteredInfo] = useState(info);
  
    const handleInputChange = (event) => {
      setInputInfo(event.target.value);
    };
  
    const sendData = (event) => {
      event.preventDefault();
      //console.log("Click exitoso");
      filter(inputInfo);
    };
  
    const filter = (userInput) => {
      if (userInput.trim() !== "") {
        //console.log("Filtrar con:", userInput);
  
        const filteredData = info.filter(
          (character) =>
            character.name.toLowerCase().includes(userInput.toLowerCase()) ||
            character.status.toLowerCase().includes(userInput.toLowerCase()) ||
            character.species.toLowerCase().includes(userInput.toLowerCase())
        );
  
        setFilteredInfo(filteredData);
      } else {
        console.log("No se ingresó ningún valor para filtrar.");
        setFilteredInfo(info);
      }
    };
  
    useEffect(() => {
      setFilteredInfo(info);
    }, [info]);
  
    return (
      <>
        <form onSubmit={sendData} className="searchFilter">
          <input
            type="text"
            placeholder="Introduce palabra de búsqueda"
            className="filterInput"
            onChange={handleInputChange}
          />
          <button id="buttonSearch" type="submit">
            Buscar
          </button>
        </form>
  
        <div className="characters">
          {filteredInfo.length > 0 ? (
            filteredInfo.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))
          ) : (
            <p>No se encontraron resultados.</p>
          )}
        </div>
      </>
    );
}

export default Buscador