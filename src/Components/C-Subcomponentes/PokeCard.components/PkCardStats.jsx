import { icon } from '../PokeCard.components/icons.js'
import { addZeros } from "../../Ohters/Function";
import { ProgressBarCustom } from './ProgressBarCustom.jsx';

// Stats de la PokeCard
export const PkCardStats = ({ hp, atk, def, satk, sdef, spd }) => {
  return (
    <div className="stats__box">
      <div className="stats__text">
        <span className='stats__text font-clr-fire'>HP</span>
        <span className='stats__text font-clr-fire'>ATK</span>
        <span className='stats__text font-clr-fire'>DEF</span>
        <span className='stats__text font-clr-fire'>SATK</span>
        <span className='stats__text font-clr-fire'>SDEF</span>
        <span className='stats__text font-clr-fire'>SPD</span>
      </div>

      <img src={icon.divider96} alt="" />

      <div className='stats_counter'>
        <span className='stats__text_counter'>{addZeros(hp)}</span>
        <span className='stats__text_counter'>{addZeros(atk)}</span>
        <span className='stats__text_counter'>{addZeros(def)}</span>
        <span className='stats__text_counter'>{addZeros(satk)}</span>
        <span className='stats__text_counter'>{addZeros(sdef)}</span>
        <span className='stats__text_counter'>{addZeros(spd)}</span>
      </div>


      {/* Para ir cambiando los colores segun el tipo de pokemon deberia de realizar una funcion aparte que modifique 
          los balores de baseBgColor y bgColor
      */}
      <div className="stats_progress">
        <div className="progress-bar">
          <ProgressBarCustom now={hp} baseBgColor="#f57d3133" bgColor="#f57d31" />
        </div>
        <div className="progress-bar">
          <ProgressBarCustom now={atk} baseBgColor="#f57d3133" bgColor="#f57d31" />
        </div>
        <div className="progress-bar">
          <ProgressBarCustom now={def} baseBgColor="#f57d3133" bgColor="#f57d31" />
        </div>
        <div className="progress-bar">
          <ProgressBarCustom now={satk} baseBgColor="#f57d3133" bgColor="#f57d31" />
        </div>
        <div className="progress-bar">
          <ProgressBarCustom now={sdef} baseBgColor="#f57d3133" bgColor="#f57d31" />
        </div>
        <div className="progress-bar">
          <ProgressBarCustom now={spd} baseBgColor="#f57d3133" bgColor="#f57d31" />
        </div>
      </div>

    </div>
  );
}