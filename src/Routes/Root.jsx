// CSS
import './../Styles/App.css'
// Componentes
import IntroAnimation from '../Components/C-Subcomponentes/IntroAnimation';
import Header from '../Components/A-Header/Header'
import Dashboard from '../Components/B-Dashboard/Dashboard'
// Manejo de estados
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Root() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Comienza en 1, para mantener el valor inicial del offset en 0.
  const pageSize = 20; // Numero de pokemons por pagina
  const [isLoading, setIsLoading] = useState(false);

  // ---
  // const { toSearch } = useParams();
  // ---

  const getPokemons = async (page) => { // 'page' se utiliza para calcular el offset en la URL, el cual indica en que pagina se encuentra
    try {
      setIsLoading(true);
      const responseToPage = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * pageSize}&limit=20`);
      const dataToPage = await responseToPage.json(); // Datos de los pokemons por pagina 
      const pokemonsDataToPage = await Promise.all(
        dataToPage.results.map(async (item) => {
          const response = await fetch(`${item.url}`);
          return await response.json();
        })
      );

      // --- Hacer un fetch para que sirva para obtener la info de cada pokemon
      // const responseToPokemonSearch = await fetch(`https://pokeapi.co/api/v2/pokemon/${toSearch}`);
      // const dataByPokemon = await responseToPokemonSearch.json(); // Dato de cada pokemon
      // --- 
      // --- Se necesita un fetch para tener todos nombres de los pokemons   
      // const allPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000`);
      // 

      setPokemonList(prevList => [...prevList, ...pokemonsDataToPage]); // Concatenar los nuevos datos con los previos

    } catch (error) {
      console.log('Ha ocurrido un error: ', error);
    } finally {
      setIsLoading(false);
      console.log('Root: carga de datos completa');
    }
  };

  // Funcion para agregar una nueva pagina
  const nextPage = () => {
    // Aumenta en 1 el numero de pagina ('page') solicitando que se muestren mas pokemons, luego para que se renderizen los cambios se lo pasa al useEffect.
    setTimeout(() => {
      setCurrentPage(currentPage + 1);
    }, 1000);
  };

  useEffect(() => {
    getPokemons(currentPage);
  }, [currentPage]);


  // ------ lv1 -------
  // const search = "chArm";
  // const obj = {
  //   names: ['pikachu', 'charmander', 'charmeleon']
  // };
  // const toSearch = obj.names;
  // const filteredPokemons = toSearch.filter(pokemonName => pokemonName.includes(search.toLowerCase()));
  // console.log('Pokemons filtrados:', filteredPokemons);

  // ----- lv2 ------
  // const search = "ChArm";
  // const toSearch = pokemonList.map(pokemon => pokemon.name);
  // // Convierto 'el objeto' pokemonList en un arrary para poder utilizar las funciones 'filter' e 'includes'. 
  // const filteredPokemons = toSearch.filter(pokemonName => pokemonName.includes(search.toLowerCase()));
  // console.log('Pokemons filtrados:', filteredPokemons);

  // ----- lv3 -----
  // Funcion buscador 
  // --> PROBLEMA, sino tengo cargado la pagian con el pokemon que corresponder no me encuentra coincidencia ninguna

  // const [inputSearch, setInputSearch] = useState('');
  // const handleInputSearch = (e) => {
  //   const search = e.target.value.toString(); 
  //   console.log('el texto:', search)

  //   // Convierto 'el objeto' pokemonList en un arrary para poder utilizar las funciones 'filter' e 'includes'. 
  //   const toSearch = pokemonList.map(pokemon => pokemon.name);
  //   const filteredPokemons = toSearch.filter(pokemonName => pokemonName.includes(search.toLowerCase()));
  //   console.log('Pokemons filtrados:', filteredPokemons);
  //   setInputSearch(search);
  // }

  return (
    <>
      {isLoading }
        <div className="web-container">
          <IntroAnimation />
          <Header pokemonList={pokemonList} />
          <Dashboard pokemonList={pokemonList} nextPageEffect={nextPage} />
        </div>

    </>
  )
}
export default Root;