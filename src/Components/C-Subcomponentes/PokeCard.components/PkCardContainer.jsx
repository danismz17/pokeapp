import { icon } from '../PokeCard.components/icons.js'

// Contenedor externo de la PokeCard
export const PkCardContainer = ({ children }) => {
  return (
    <>
      <div className={` rotate-in-diag-2 details__container bg-fire`}>
        <img className='bg-card'  src={icon["pk_bg"]} alt="background Pokeball" />
        {children}
      </div>
    </>
  );
};