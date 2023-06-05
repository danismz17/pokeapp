import Logo from "./Logo";
import SearchFilter from "./SearchFilter";

export default function Header({ pokemonList }) {
  return (
    <>
      <header>
        <Logo />
        <SearchFilter pokemonList={pokemonList} />
      </header>
    </>
  )
}
