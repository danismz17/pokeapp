import React from 'react';
import { MiniCards } from './MiniCards';
import { Outlet } from 'react-router-dom';

export default function Dashboard({ pokemonList, sortPokemons, nextPageEffect }) {
  // Función para controlar la carga de pokemons mediante un scroll determinado
  const handleScroll = () => {
    var scrollableDiv = document.getElementById('myWindows');
    var isScrolledToBottom = scrollableDiv.scrollTop + scrollableDiv.clientHeight === scrollableDiv.scrollHeight;

    if (isScrolledToBottom) {
      nextPageEffect();
      console.log("Carga");
    }
  };

  console.log("dashboard", sortPokemons.name);
  //* pokemon?.types?.[0]?.type?.name // Consulta que tipo de pokemon es teniendo en cuenta el caso 'undefined' (al comienzo) 
  return (
    <main onScroll={handleScroll} id='myWindows'>
      {
        (!sortPokemons || sortPokemons.length === 0) ? (

          pokemonList.map((pokemon, index) => (
            <MiniCards
              key={index}
              number={pokemon.id}
              name={pokemon.name}
              img={pokemon.sprites["other"]["official-artwork"]["front_default"]}
              type1={pokemon.types[0].type.name}
              type2={pokemon.types[1] ? pokemon.types[1].type.name : null}
            />
          ))
        ) : (
          sortPokemons.map((pokemon, index) => (
            <MiniCards
              key={index}
              number={pokemon.id}
              name={pokemon.name}
              img={pokemon?.sprites?.["other"]["official-artwork"]["front_default"]}
              type1={pokemon?.types?.[0].type.name}
              type2={pokemon.types[1] ? pokemon.types[1].type.name : null}
            />
          )))
      }
      <Outlet />
    </main>
  );
}
