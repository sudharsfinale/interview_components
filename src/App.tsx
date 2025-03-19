import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import "./App.css";
import ProgressBarContainer from "./containers/ProgressBarContainer";
import ComponentNavigator from "./containers/ComponentNavigator";
import FileExplorerContainer from "./containers/FileExplorerContainer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/ProgressBar" element={<ProgressBarContainer />} />
        <Route path="/FileExplorer" element={<FileExplorerContainer />} />
        <Route path="/" element={<ComponentNavigator />} />
      </Routes>
    </Router>
  );
};

export default App;
