import React, { useState } from "react";
import classes from "./AddTask.module.css";
import Container from "../UI/Container";
import Inner from "../UI/Inner";

const AddTask = (props) => {
  // Creating our state in order to store data inside of it later.
  const [enteredTask, setEnteredTask] = useState("");

  // Our main function call when the user wants to add a new task to the list.
  const addTaskHandler = (event) => {
    event.preventDefault();

    // If the user dose not enter anything then we do nothing and return.
    if (enteredTask.trim().length === 0) {
      return;
    }

    // Passing our recived data from the user to this function via props(drilling) in order to use it somewhere else.
    props.onAddTask(enteredTask);
    // Setting the value of our state to empty string after everytime the user submit in order to clean the input.
    setEnteredTask("");
  };

  // Our simple function that gonna be called whenever tha value inside input element change, we then update our state with that value.
  const taskChangeHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  return (
    <Container>
      <p className={classes.headline}>
        TODO<span className={classes["headline-2"]}>List</span>
      </p>

      <Inner>
        <form onSubmit={addTaskHandler}>
          <input
            className={classes.input}
            type="text"
            placeholder="What will you do today?"
            onChange={taskChangeHandler}
            value={enteredTask}
          />

          <button type="submit" className={classes.button}>
            ADD
          </button>
        </form>
      </Inner>
    </Container>
  );
};

export default AddTask;
