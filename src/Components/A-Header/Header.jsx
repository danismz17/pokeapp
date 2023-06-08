import Logo from "./Logo";
import SearchFilter from "./SearchFilter";

export default function Header({ value, onChange, activeType, handleTagContainerClick, activeTags}) {
  return (
    <>
      <header>
        <Logo />
        <SearchFilter 
        value={value}
        onChange={onChange}
        activeType={activeType}
        handleTagContainerClick={handleTagContainerClick}
        activeTags={activeTags}
        />
      </header>
    </>
  )
}
