import React from "react";
import classes from "./ListContainer.module.css";

const ListContainer = (props) => {
  return (
    <div className={`${classes["list-container"]} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default ListContainer;
