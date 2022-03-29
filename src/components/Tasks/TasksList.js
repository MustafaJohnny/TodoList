import React from "react";

import classes from "./TasksList.module.css";

import Button from "../UI/Button";

import ListContainer from "../UI/ListContainer";

import Container from "../UI/Container";

const TasksList = (props) => {
  // Creating several elements everytime we have new data with the map method and then inserting it inside the DOM.
  return (
    <Container>
      {props.tasks.map((task) => (
        <ListContainer id={task.id} key={task.id}>
          <ul className={classes.lists}>
            <li className={classes.list}>
              <span>{task.taskList}</span>
              <Button id={task.id} onDelete={props.onDeleteTask} />
            </li>
          </ul>
        </ListContainer>
      ))}
    </Container>
  );
};

export default TasksList;
