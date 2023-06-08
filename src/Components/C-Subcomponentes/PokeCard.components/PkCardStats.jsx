import { icon } from '../PokeCard.components/icons.js'
import { addZeros } from "../../Ohters/Functions.js";
import { ProgressBarCustom } from './ProgressBarCustom.jsx';

import { getFontColorClass } from "../../Ohters/Functions";
import { getBackgroundCompleteHex } from "../../Ohters/Functions";
import { getBackgroundEmptyHex } from "../../Ohters/Functions";

// Stats de la PokeCard
export const PkCardStats = ({ type, hp, atk, def, satk, sdef, spd }) => {
  const fontClr = getFontColorClass(type);
  const backgroundComplete = getBackgroundCompleteHex(type);
  const backgroundEmpty = getBackgroundEmptyHex(type);

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
          <ProgressBarCustom now={hp} baseBgColor={backgroundEmpty} bgColor={backgroundComplete} />
          <ProgressBarCustom now={atk} baseBgColor={backgroundEmpty} bgColor={backgroundComplete} />
          <ProgressBarCustom now={def} baseBgColor={backgroundEmpty} bgColor={backgroundComplete} />
          <ProgressBarCustom now={satk} baseBgColor={backgroundEmpty} bgColor={backgroundComplete} />
          <ProgressBarCustom now={sdef} baseBgColor={backgroundEmpty} bgColor={backgroundComplete} />
          <ProgressBarCustom now={spd} baseBgColor={backgroundEmpty} bgColor={backgroundComplete} />
      </div>

    </div>
  );
}