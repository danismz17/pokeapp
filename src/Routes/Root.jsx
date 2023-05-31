// CSS
import './../Styles/App.css'
// Componentes
import Header from '../Components/A-Header/Header'
import Dashboard from '../Components/B-Dashboard/Dashboard'
import MovileControls from '../Components/C-Subcomponentes/MovileControls'

// Manejo de estados

import { useEffect, useState } from 'react'

function Root() {

  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getPokemon = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
      const responsePk = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      // const responseOtherPk = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);

      const responseData = await response.json();
      const responseDataPk = await responsePk.json();
      // const responseOtherDataPk = await responseOtherPk.json();
      
      setPokemon({ ...responseData, ...responseDataPk});
      // setPokemon({ ...responseData, ...responseDataPk, ...responseOtherDataPk });
    } catch (error) {
      console.log('Ha ocurrido un error: ', error);
    } finally {
      setIsLoading(false);
      console.log("Root: carga de datos completa");
    }
  }



  useEffect(() => {
    getPokemon();
  }, []);
  return (
    <>
      {isLoading && (
        <p>Pikachu corriendo - Loading...</p>
      )}
      <div className="web-container">
        <Header />
        <Dashboard
          api={pokemon}
        />

      </div>
    </>
  )
}

export default Root
