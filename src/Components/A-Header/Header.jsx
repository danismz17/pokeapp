import Logo from "./Logo";
import SearchFilter from "./SearchFilter";

export default function Header({ value, onChange }) {
  return (
    <>
      <header>
        <Logo />
        <SearchFilter 
        value={value}
        onChange={onChange}
         />
      </header>
    </>
  )
}
