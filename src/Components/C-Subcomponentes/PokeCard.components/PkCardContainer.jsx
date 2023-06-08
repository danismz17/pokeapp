import { icon } from '../PokeCard.components/icons.js'
import { getBackgroundColorClass } from '../../Ohters/Functions.js'

// Contenedor externo de la PokeCard
export const PkCardContainer = ({ children, type }) => {
  const background = getBackgroundColorClass(type);

  return (
    <>
      <div className={`details__container  ${background}`}>
        <img className='bg-card' src={icon["pk_bg"]} alt="background Pokeball" />
        {children}
      </div>
    </>
  );
};