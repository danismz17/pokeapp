import React from "react";

import ProgressBar from "@ramonak/react-progress-bar";

export const ProgressBarCustom = ({ now, baseBgColor , bgColor }) => {
  return <ProgressBar
    completed={now}
    height="4px"
    width="233px"
    // Ver 
    baseBgColor={baseBgColor}
    // baseBgColor="#f57d3133"
    bgColor={bgColor}
    // bgColor="#f57d31"

    isLabelVisible={false}
    animateOnRender={true}
  />;
};