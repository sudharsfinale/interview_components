import React from "react";
import { useNavigate } from "react-router-dom";
import { AVAILABLE_PATHS } from "../constants/constants";

const ComponentNavigator = () => {
  const navigate = useNavigate();
  //components_done should match their routeName
  let components_done = [
    AVAILABLE_PATHS.PROGRESS_BAR,
    AVAILABLE_PATHS.FILE_EXPLORER,
    AVAILABLE_PATHS.STEPPER,
    AVAILABLE_PATHS.OTP_INPUT,
  ];
  const navigateToComponent = (componentName: any) => {
    navigate(`/${componentName}`);
  };
  return (
    <div>
      <h3 onClick={() => navigate("/progressBar")}>Components List</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {components_done?.map((_item, index) => (
          <div onClick={() => navigateToComponent(_item)}>
            {index + 1}) {_item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentNavigator;
