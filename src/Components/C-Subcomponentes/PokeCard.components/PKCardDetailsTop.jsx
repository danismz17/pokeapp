import { getBackgroundColorClass } from "../../Ohters/Functions";
import { getFontColorClass } from "../../Ohters/Functions";

// Parte superior de los detalles de la PokeCard
export const PKCardDetailsTop = ({ type1, type2 }) => {
  const backgroundT1 = getBackgroundColorClass(type1);
  const backgroundT2 = getBackgroundColorClass(type2);
  const fontClrT1 = getFontColorClass(type1);
  
  return (
    <div className='details__card_type'>
      <div className='details__type'>
        {type2 ? (
          <>
            <span className={`details__type-text ${backgroundT1}`}>
              {type1}
            </span>
            <span className={`details__type-text ${backgroundT2}`}>
              {type2}
            </span>
          </>
        ) : (
          <span className={`details__type-text ${backgroundT1}`}>
            {type1}
          </span>
        )}
      </div>
      <h3 className={`details__about ${fontClrT1}`}>About</h3>
    </div>
  );
};
