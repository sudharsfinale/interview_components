import React from "react";
import ProgressBar from "../../components/ProgressBar";

const ProgressBarContainer = () => {
  const bars = [0, 4, 10, 20, 40, 50, 60, 80, 100];
  return (
    <div>
      <h3>Progress Bar Container</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {bars.map((_perc, index) => {
          return <ProgressBar key={index} progress={_perc} />;
        })}
      </div>
    </div>
  );
};

export default ProgressBarContainer;
