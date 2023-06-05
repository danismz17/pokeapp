import React from "react";

import ProgressBar from "@ramonak/react-progress-bar";

export const ProgressBarCustom = ({ now }) => {
  return <ProgressBar
    completed={now}
    height="4px"
    width="233px"
    baseBgColor="#f57d3133"
    bgColor="#f57d31"
    isLabelVisible={false}
    animateOnRender={true}
  />;
};