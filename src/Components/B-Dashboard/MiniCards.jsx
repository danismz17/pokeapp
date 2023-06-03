import React from 'react';
import { addZeros } from '../Ohters/Function.js';
import { useNavigate } from 'react-router-dom';

export const MiniCards = ({ number, img = "/Images/Icons/Silhouette.png", name }) => {
  let navigate = useNavigate()
  // Redirige al hacer click en el 'div' 
  const handleMiniCardClick = () => {
    const url = `/pokemon/${name || number}`;
    navigate(url);
  };

  return (
    <>
      <div
        className="minicard"
        id='miniCard'
        onClick={handleMiniCardClick}
      >
        <div className="minicard-number">
          <p>{number ? (<> #{addZeros(number)} </>) : (<i>!@#</i>)}{" "}
          </p>
        </div>

        <div className='minicard-image'>
          <img src={img} alt="" />
        </div>

        <div className="minicard-name">
          {name ? (<p>{name}</p>) : (<i>Pokemon does not exist.</i>)}
        </div>
      </div>
    </>
  )
};
