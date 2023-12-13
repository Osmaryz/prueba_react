import React, { useEffect} from 'react';

function MiApi({ setInfo }) {
    useEffect(() => {
      const callApi = async () => {
        try {
          const url = "https://rickandmortyapi.com/api/character/";
          const response = await fetch(url);
          const data = await response.json();
  
          const characters = data.results;
  
          setInfo(characters);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      callApi();
    }, [setInfo]);
  
    return null;
  }

export default MiApi