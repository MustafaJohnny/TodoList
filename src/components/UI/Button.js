import React from "react";
import trashIcon from "./trash.svg";
import classes from "./Button.module.css";

const Button = (props) => {
  // Setting the delete function with the recived id via props in order to remove the wanted(matched) element.
  const deleteTask = () => {
    props.onDelete(props.id);
  };

  return (
    <button onClick={deleteTask} className={classes["delete-button"]}>
      <img src={trashIcon} alt="icon" />
    </button>
  );
};

export default Button;
