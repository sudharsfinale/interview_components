import React, { useState } from "react";
import { FaRegFolder } from "react-icons/fa";
import { FaRegFolderOpen } from "react-icons/fa";
import { BsFolderPlus } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
const FileExplorer = (props: any) => {
  const { folderData } = props;
  const List = ({ list, addNodeToList, deleteNodeFromList }: any) => {
    const [expanded, setExpanded] = useState<any>({});
    return (
      <div className="container">
        {list.map((node: any) => {
          return (
            <div key={node?.id}>
              {node?.isFolder ? (
                <span
                  style={{
                    marginRight: "12px",
                    position: "relative",
                    top: "3px",
                  }}
                  onClick={() => {
                    setExpanded((prev: any) => ({
                      ...prev,
                      [node?.id]: !prev[node?.id],
                    }));
                  }}
                >
                  {expanded?.[node?.id] ? <FaRegFolderOpen /> : <FaRegFolder />}
                </span>
              ) : null}
              <span>{node?.name}</span>
              {node?.isFolder ? (
                <span
                  onClick={() => addNodeToList(node?.id)}
                  style={{
                    marginLeft: "12px",
                    position: "relative",
                    top: "4px",
                  }}
                >
                  <BsFolderPlus />
                </span>
              ) : null}
              <span
                onClick={() => deleteNodeFromList(node?.id)}
                style={{
                  marginLeft: "6px",
                  position: "relative",
                  top: "4px",
                  cursor: "pointer",
                }}
              >
                <AiOutlineDelete />
              </span>
              {expanded?.[node?.id] && node?.children ? (
                <List
                  list={node?.children}
                  addNodeToList={addNodeToList}
                  deleteNodeFromList={deleteNodeFromList}
                />
              ) : null}
            </div>
          );
        })}
      </div>
    );
  };
  const [folder_data, setFolderData] = useState(folderData);
  const addNodeToList = (parentId: any) => {
    const name = prompt("Enter folder name");
    const isFolder = true;
    const newFolder = {
      id: crypto.randomUUID(),
      name: name,
      isFolder: isFolder,
      children: [],
    };
    const updateTree = (list: any) => {
      return list.map((node: any) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [...node.children, { ...newFolder }],
          };
        }
        if (node.children) {
          return {
            ...node,
            children: updateTree(node.children),
          };
        }
        return node;
      });
    };

    setFolderData((prev: any) => updateTree(prev));
  };
  // let filter_items = list.filter((item) => item.id !== itemId);
  // if (filter_items.length > 0) {
  //   let deep_map = filter_items?.map((node) => {
  //     if (node.children) {
  //       return {
  //         ...node,
  //         children: updateTree(node.children),
  //       };
  //     } else {
  //       return node;
  //     }
  //   });
  //   return deep_map;
  // }
  // return filter_items;
  const deleteNodeFromList = (itemId: any) => {
    const updateTree = (list: any) => {
      return list
        ?.filter((item: any) => item?.id !== itemId)
        .map((node: any) => {
          if (node.children) {
            return {
              ...node,
              childeren: updateTree(node.children),
            };
          }
          return node;
        });
    };
    setFolderData((prev: any) => updateTree(prev));
  };
  return (
    <div>
      <List
        list={folder_data}
        addNodeToList={addNodeToList}
        deleteNodeFromList={deleteNodeFromList}
      />
    </div>
  );
};

export default FileExplorer;
