import React, { useState } from "react";
import AddTask from "./components/Tasks/AddTask";
import Footer from "./components/UI/Footer";
import TasksList from "./components/Tasks/TasksList";

function App() {
  // Our main state that we gonna store all our coming data from the user inside of it and then passing that data to other elements.
  const [tasksList, setTasksList] = useState([]);

  // This is the function that we call inside of AddTask component in order to get the recived data from the user and then store it in a new state.
  const addTaskHandler = (taskContent) => {
    setTasksList((prevTasksList) => {
      return [
        ...prevTasksList,
        { taskList: taskContent, id: Math.random().toString() },
      ];
    });
  };

  // Our delete function that we call when the user want to remove a task, really interesting logic with the filter method!
  const deleteTaskHandler = (taskID) => {
    setTasksList((prevTasksList) => {
      const updateList = prevTasksList.filter((task) => task.id !== taskID);
      return updateList;
    });
  };

  return (
    <React.Fragment>
      <AddTask onAddTask={addTaskHandler} />
      <TasksList tasks={tasksList} onDeleteTask={deleteTaskHandler} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
