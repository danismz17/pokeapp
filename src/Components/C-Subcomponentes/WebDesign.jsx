import React from 'react'

export default function WebDesign() {
  return (
    <>        <div className='web-design'>
    <div className="web-hero-container">
      <div className='web-hero-title-container'>
        <h2 className='text-blur-out'>Pokedex</h2>
      </div>
      <div className="web-hero-pokeanimation-container">
        <img className='.web-hero-charizard' src="/Images/intro-charizard.gif" alt="" />
      </div>

      <div className="web-hero-pokeanimation-container2">
        <img src="/public/Images/onix.gif" alt="" />
      </div>
    </div>

    <div className="web-menu-container">
      <ul>
        <li><a href="">Bienvenidos</a></li>
        <li><a href="">PokeApp</a></li>
        <li> <img className='web-menu-logo slide-in-bck-center' src="/Images/PokeApp-6-6-2023.png/" alt="" /></li>
        <li><a href="">Episodios</a></li>
        <li><a href="">Creditos</a></li>
      </ul>
    </div>

    <div className="web-intro-container fade-in-left">
      <div className="pokemon-animation-container1">
        <img src="/pokemon-sections/coso.gif" alt="" />
      </div>

      <div className="web-intro-text-container">
        <h3>Bienvenidos a la base de datos mas grande de Pokemon</h3>
        <p>Tu pokemon favorito, asi como estadisticas, y sus evoluciones las encontras aqui. <br />
          Investiga, aprende, desafia y descubre.
        </p>
      </div>
    </div>

    <div className="web-explication-container fade-in-right">
      <div className="web-explication-text">
        <h3>Buscalos Ya!</h3>
        <p>Buscalos por nombre, por numero, conoce los primeros 150 de la primer generacion
          <br></br> que tan poderosos fueron los de la segunda?</p>
      </div>

      <div className="pokemon-animation-container2">
        <a href="a"><img src="/pokemon-sections/blastois.gif" alt="" /></a>
      </div>
    </div>

    <div className="web-container-para-buscador-y-api">
      <div className="web-buscador-container">
        ACA VA EL BUSCADOR

      </div>

      <div className="web-api-container">
        ACA VA EL MAIN
      </div>
    </div>

    <div className="web-container-episodios">

      <div className="web-contenedor-link-episodios">
        <h3>Revivi todos los episodios</h3>
        <p>Todas las aventuras las encontras haciendo click en la pokebola</p>
        <a href="https://youtu.be/NdmH7K_rM-w?list=PLpbdLXz_BiMVQVvEgL5JYVdx0XuPvJIar">
          <img src="/Images/Pokeball-PNG-Photos.png" alt="" />
        </a>
      </div>


      <div className="pokemon-animation-container3">
        <a href="a"><img src="/pokemon-sections/snorlax.gif" alt="" /></a>
      </div>
    </div>

    <div className="web-footer">
      <div className="autores-container">
      <p>Desarrollado por Joaquin, Gonzalo y Daniel</p>
      </div>

      <div className="redes-container">
        <img src="public\Images\fb.png" alt="" />
        <img src="public\Images\tt.png" alt="" />
        <img src="public\Images\ig.png" alt="" />
        
      </div>

      <div className="derechos-container">
        <p>Todos los derechos reservados ®</p>
      </div>

    </div>

    </div>
    
    </>
  )
}
