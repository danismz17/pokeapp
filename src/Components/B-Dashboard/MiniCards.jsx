import React from 'react'

export const MiniCards = (props) => {
  // console.log("Minicard", props.name)


  return (
    <>
      <div className="minicard"
      // OnCLick abre el PokeCard
      >
        <div className="minicard-number">
          <p> {props.id} </p>
        </div>

        <div className='minicard-image'>
          <img src="/Images/Icons/Silhouette.png" alt="" />
        </div>

        <div className="minicard-name">
          <p>{props.name}</p>
        </div>
      </div>
      
    </>
  )
}
