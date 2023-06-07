import React from 'react';
import { addZeros } from '../Ohters/Function.js';
import { useNavigate } from 'react-router-dom';

export const MiniCards = ({ number, img = "/Images/Icons/Silhouette.png", name, type1, type2 }) => {
  // Redirige al hacer click en el 'div' 
  let navigate = useNavigate()
  const handleMiniCardClick = () => {
    const url = `/pokemon/${name || number}`;
    navigate(url);
  };
  return (
    <>
      <div
        className="minicard flip-in-ver-right"
        id='miniCard'
        onClick={handleMiniCardClick}
      >
        <div className="minicard-number">
          <p>{number ? (<> #{addZeros(number)} </>) : (<i className='error'>!@#</i>)}{" "}
          </p>
        </div>

        <div className='minicard-image'>
          <img src={img} alt="" />
        </div>

        <div className="minicard-name">
          {name ? (<p>{name}</p>) : (<i className='error'>Pokemon doesn't exist.</i>)}
        </div>

        {/* <div className=''>
          {type2 ? (
            <>
              <span className={`type?`}>
                {type1}
              </span>
              <span className={`type?`}>
                {type2}
              </span>
            </>
          ) : (
            <span className={`type?`}>
              {type1}
            </span>
          )}
        </div> */}

      </div >
    </>
  )
};
