import Logo from "./Logo";
import SearchFilter from "./SearchFilter";

export default function Header({ pokemonList, value, onChange }) {
  return (
    <>
      <header>
        <Logo />
        <SearchFilter 
        pokemonList={pokemonList} 
        value={value}
        onChange={onChange}
         />
      </header>
    </>
  )
}
