// Parte superior de los detalles de la PokeCard
export const PKCardDetailsTop = ({ type1, type2 }) => {
  return (
    <div className='details__card_type'>
      <div className='details__type'>
        {type2 ? (
          <>
            <span className={`type f-bg-fire`}>
              {type1}
            </span>
            <span className={`type f-bg-fire`}>
              {type2}
            </span>
          </>
        ) : (
          <span className={`type f-bg-fire`}>
            {type1}
          </span>
        )}
      </div>
      <h3 className="details__about f-fire">About</h3>
    </div>
  );
};
