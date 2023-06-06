// Parte superior de los detalles de la PokeCard
export const PKCardDetailsTop = ({ type1, type2 }) => {
// Funcion para determinar el color 

  return (
    <div className='details__card_type'>
      <div className='details__type'>
        {type2 ? (
          <>
            <span className={`details__type-text bg-fire`}>
              {type1}
            </span>
            <span className={`details__type-text bg-fire`}>
              {type2}
            </span>
          </>
        ) : (
          <span className={`details__type-text bg-fire`}>
            {type1}
          </span>
        )}
      </div>
      <h3 className="details__about font-clr-fire">About</h3>
    </div>
  );
};
