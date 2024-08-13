import React, { useState, useEffect } from "react";
import "../Components/Todo.css";
import Todoform from "../Components/Todoform";
import Todolist from "./Todolist";
import Todotime from "./Todotime";
import { setLocalStorage, getLocalStorage } from "./GetLocalstorage";

export default function Todo() {
  // Initialize tasks state from local storage
  const [tasks, setTasks] = useState(() => getLocalStorage());

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    setLocalStorage(tasks);
  }, [tasks]);

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;

    // Prevent adding duplicate tasks
    const ifTodoContentMatched = tasks.find(
      (currTask) => currTask.content === content
    );
    if (ifTodoContentMatched) return;

    setTasks((prevTask) => [...prevTask, { id, content, checked }]);
  };

  const handleDelete = (value) => {
    const updatedTasks = tasks.filter((currTask) => currTask.content !== value);
    setTasks(updatedTasks);
  };

  const handleClear = () => {
    setTasks([]);
  };

  const handleChecked = (content) => {
    const updatedTasks = tasks.map((currTask) =>
      currTask.content === content
        ? { ...currTask, checked: !currTask.checked }
        : currTask
    );
    setTasks(updatedTasks);
  };

  return (
    <section className="todo-container">
    <section className="container">
    <header>
        <h2>MY TODO LIST</h2>
        <Todotime />
      </header>
      <Todoform onAddTask={handleFormSubmit} />
    </section>
      
      <section className="myUnOrdList">
        <ul>
          {tasks.map((currTask) => (
            <Todolist
              key={currTask.id}
              data={currTask.content}
              checked={currTask.checked}
              onHandleDelete={handleDelete}
              onHandleChecked={handleChecked}
            />
          ))}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClear}>
          Clear All
        </button>
      </section>
    </section>
  );
}