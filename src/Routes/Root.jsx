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
  const pageSize = 12; // Numero de pokemons por pagina
  const [isLoading, setIsLoading] = useState(false);

  // Peticion a la API
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

  // Solicita a la API una nueva pagina.
  const nextPage = () => {
    // Aumenta en 1 el numero de pagina ('page') solicitando que se muestren mas pokemons, luego para que se renderizen los cambios se lo pasa al useEffect.
    setTimeout(() => {
      setCurrentPage(currentPage + 1);
    }, 1000);
  };

  useEffect(() => {
    getPokemons(currentPage);
  }, [currentPage]);

  const [inputSearch, setInputSearch] = useState('');
  const [sortPokemons, setSortPokemons] = useState([]);

  // Buscador
  const handleInputSearch = (e) => {
    const search = e.target.value.toString();
    const sortPokemons = pokemonList.filter(pokemonName => pokemonName.name.includes(search.toLowerCase()));
  
    console.log('Pokemons filtrados:', sortPokemons[0]); // borrar

    setSortPokemons(sortPokemons)
    setInputSearch(search);
  }
  return (
    <>
      {isLoading}
      <div className="web-container">
        <IntroAnimation />
        <Header
          value={inputSearch}
          onChange={handleInputSearch}
        />
        <Dashboard
          sortPokemons={sortPokemons}
          pokemonList={pokemonList}
          nextPageEffect={nextPage}
        />
      </div>
    </>
  )
}
export default Root;