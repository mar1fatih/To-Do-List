import React, {useState} from "react";

function ToDoList() {

  const [tasks, settasks] = useState([]);
  const [newTask, setnewTask] = useState("");

  const TaskChangeHandler = (event) => {
    setnewTask(event.target.value);
  }
  const AddTaskHandler = () => {
    if (newTask !== ""){
      settasks((t) => [...t, newTask]);
      setnewTask("");
    }
  }
  const DeleteHandler = index => {
    settasks((t) => t.filter((_, i) => i !== index));
  }
  const UpHandler = (index) => {
    if (index > 0){
      const newTasks = [...tasks];
      const temp = newTasks[index - 1];
      newTasks[index - 1] = newTasks[index];
      newTasks[index] = temp;
      settasks(newTasks);
    }
  }
  const DownHandler = (index) => {
    if (index < tasks.length - 1){
      const newTasks = [...tasks];
      const temp = newTasks[index + 1];
      newTasks[index + 1] = newTasks[index];
      newTasks[index] = temp;
      settasks(newTasks);
    }
  }

  return(<div className="to-do-list">
            <h2>To Do List:</h2>
            <div className="tasks">
                <input id="input" type="text" value={newTask} onChange={TaskChangeHandler} placeholder="Enter a task ..."/>
                <button className="button" onClick={AddTaskHandler}>Add</button>
                <ol>
                    {tasks.map((task, index) => <li key={index}>
                                                <span className="text">{task}</span>
                                                <button className="delete" onClick={() => DeleteHandler(index)}>Delete</button>
                                                <button className="up" onClick={() => UpHandler(index)}>👆</button>
                                                <button className="down" onClick={() => DownHandler(index)}>👇</button>
                                                </li>)}
                </ol>
            </div>
        </div>);
}

export default ToDoList;