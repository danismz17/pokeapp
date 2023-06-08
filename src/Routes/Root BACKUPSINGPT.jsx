// CSS
import './../Styles/App.css'
// Componentes
import IntroAnimation from '../Components/C-Subcomponentes/IntroAnimation';
import Header from '../Components/A-Header/Header'
import Dashboard from '../Components/B-Dashboard/Dashboard'
// Manejo de estados
import { useEffect, useState } from 'react'

function Root() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Comienza en 1, para mantener el valor inicial del offset en 0.
  const [isLoading, setIsLoading] = useState(false);
  const [inputSearch, setInputSearch] = useState('');
  const [sortPokemons, setSortPokemons] = useState([]);
  const [filter, setFilter] = useState('')
  const [activeType, setActiveType] = useState(null);
  const [activeTags, setActiveTags] = useState([]);

  const pageSize = 12; // Numero de pokemons por pagina

  //* Peticion a la API
  const getPokemons = async (page) => { // 'page' se utiliza para calcular el offset en la URL, el cual indica en que pagina se encuentra.
    try {
      setIsLoading(true);
      const responseToPage = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * pageSize}&limit=20`);
      const dataToPage = await responseToPage.json(); // Datos de los pokemons por pagina.
      const pokemonsDataToPage = await Promise.all(
        dataToPage.results.map(async (item) => {
          const response = await fetch(`${item.url}`);
          return await response.json();
        })
      );
      setPokemonList(prevList => [...prevList, ...pokemonsDataToPage]); // Concatenar los nuevos datos con los previos
    } catch (error) {
      console.log('Ha ocurrido un error: ', error);
    } finally {
      setIsLoading(false);
      console.log('Root: carga de datos completa');
    }
  };

  //* Solicita a la API una nueva pagina.
  const nextPage = () => {
    // Aumenta en 1 el numero de pagina ('page') solicitando que se muestren mas pokemons, luego para que se renderizen los cambios se lo pasa al useEffect.
    setTimeout(() => {
      setCurrentPage(currentPage + 1);
    }, 1000);
  };


  //* Buscador
  const handleInputSearch = (e) => {
    const search = e.target.value.toString();
    setInputSearch(search);
  }

  const handleTagContainerClick = (tag) => {
    console.log("hola")
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter((activeTag) => activeTag !== tag));
    } else {
      if (activeTags.length < 2 && tag !== 'all') {
        console.log("hola444")
        setActiveTags([...activeTags, tag]);
      } else if (tag === 'all') {
        setActiveTags([tag]);
      }
    }

    setActiveType(tag === 'all' ? null : tag);
    setFilter("active")
    console.log(activeTags);
  };



  //Renderizar filtrado


  let filtredPokemonData = pokemonList;
  let filterPokemons = [];

  if (activeTags.length > 0) {
    filterPokemons = [...filter ? pokemonList.filter(pokemon => pokemon.types[0].type?.name == activeTags[0])
      : pokemonList];
  }

  if (activeTags.length > 1) {
    filterPokemons = [...filter ? pokemonList.filter(pokemon => pokemon.types[0].type?.name == activeTags[1])
      : pokemonList];
  }

  if (filterPokemons.length > 0) {
    filtredPokemonData = filterPokemons;
  }

  // Renderiza
  useEffect(() => {
    getPokemons(currentPage);
  }, [currentPage]);

  // Renderiza al buscar
  useEffect(() => {
    const sortPokemons = pokemonList.filter((pokemon) =>
      isNaN(inputSearch) ? pokemon.name.includes(inputSearch.toLowerCase()) : pokemon.id == parseInt(inputSearch));
    setSortPokemons(sortPokemons)
  }, [inputSearch])

  // useEffect(() => {
  //   getTypeOfPokemon();
  // }, [pokemonList]);



  return (
    <>
      {isLoading}
      <div className="web-container">
        <IntroAnimation />
        <Header
          value={inputSearch}
          onChange={handleInputSearch}
          activeType={activeType}
          activeTags={activeTags}
          handleTagContainerClick={handleTagContainerClick}
        />
        <Dashboard
          sortPokemons={sortPokemons}
          pokemonList={filtredPokemonData}
          nextPageEffect={nextPage}
        />
      </div>
    </>
  )
}
export default Root;

