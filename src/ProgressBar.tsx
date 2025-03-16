import React, { useEffect, useState } from "react";
interface ProgressBarProps {
  progress: number;
}
const ProgressBar = (props: ProgressBarProps) => {
  const { progress } = props;
  const [animatedProgress, setAnimatedProgress] = useState(0);
  useEffect(() => {
    setTimeout(() => setAnimatedProgress(progress), 100);
  }, [progress]);
  return (
    <div className="outer">
      <div
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemax={100}
        aria-valuemin={0}
        className="inner"
        style={{
          transform: `translateX(${animatedProgress - 100}%)`,
          color: progress < 3 ? "black" : "white",
        }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
