import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export const ProgressBarCustom = ({ now, baseBgColor, bgColor }) => {
  return (
    <div className="progress-bar">
      <ProgressBar
        completed={now}
        height="4px"
        width="233px"
        baseBgColor={baseBgColor}
        bgColor={bgColor}
        isLabelVisible={false}
        animateOnRender={true}
      />
    </div>
    )
};