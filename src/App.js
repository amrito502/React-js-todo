import { useState } from "react";
import "./App.css";

function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([]);

  const createEventHandeler = (e) => {
    e.preventDefault();
    setTodoList([todoTitle, ...todoList]);
    setTodoTitle("");
  }

  return (
    <div className="App">
      <form className="form">
        <input required value={todoTitle} type="text" onChange={ (e) => setTodoTitle(e.target.value)} />
        <button onClick={(e) => createEventHandeler(e)}>Create Data</button>
      </form>
      <div className="showData">
        <ul>
          {todoList.map(item => (
            <li>{item} <span className="edit">Edit</span><span className="delete">Delete</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
