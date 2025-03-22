import React from "react";
import FileExplorer from "../../components/FileExplorer";
import folderData from "../../data.json";
const FileExplorerContainer = () => {
  return (
    <div>
      <h3>File Explorer</h3>
      <FileExplorer folderData={folderData} />
    </div>
  );
};

export default FileExplorerContainer;
