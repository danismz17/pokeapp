import { icon } from '../PokeCard.components/icons.js'
import { addZeros } from "../../Ohters/Functions.js";
import { ProgressBarCustom } from './ProgressBarCustom.jsx';

import { getFontColorClass } from "../../Ohters/Functions";
import { getBackgroundColorClass } from "../../Ohters/Functions";
import { getBackgroundOpacityClass } from "../../Ohters/Functions";

// Stats de la PokeCard
export const PkCardStats = ({ type ,hp, atk, def, satk, sdef, spd }) => {
  const fontClr = getFontColorClass(type);
  const backgroundActive = getBackgroundColorClass(type);
  const background = getBackgroundOpacityClass(type);

  return (
    <div className="stats__box">
      <div className="stats__text">
        <span className={`stats__text ${fontClr}`}>HP</span>
        <span className={`stats__text ${fontClr}`}>ATK</span>
        <span className={`stats__text ${fontClr}`}>DEF</span>
        <span className={`stats__text ${fontClr}`}>SATK</span>
        <span className={`stats__text ${fontClr}`}>SDEF</span>
        <span className={`stats__text ${fontClr}`}>SPD</span>
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

      <div className="stats_progress">
        <div className="progress-bar">
          
          //! Ver
          <ProgressBarCustom now={hp} baseBgColor={background} bgColor={backgroundActive} />
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