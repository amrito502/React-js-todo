import { useState } from "react";
import "./App.css";

function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([]);
const [isEditable, setIsEditable] = useState(false);
const [editableTodo, setEditableTodo] = useState(null);

  const createEventHandeler = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      title: todoTitle
    }


    setTodoList([newTodo, ...todoList]);
    setTodoTitle("");
  }

  const editHandler = (id) => {
    const tobeEditedTodo = todoList.find(todo => todo.id === id);
    setIsEditable(true);
    setEditableTodo(tobeEditedTodo);
    setTodoTitle(tobeEditedTodo.title);
  }

  const updateHandler = (e) => {
    e.preventDefault();
    editableTodo.title = todoTitle;
    setTodoTitle("");
    setIsEditable(false);
    setEditableTodo(null);
  }

  const deleteHandler = (id) => {
    // const tobeDeletedTodo = todoList.find(todo => todo.id === id);
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <form className="form">
        <input required value={todoTitle} type="text" onChange={ (e) => setTodoTitle(e.target.value)} />
        <button onClick={(e) => isEditable === true ? updateHandler(e) : createEventHandeler(e)}>
          {isEditable === true ? "Update Todo" : "Create Todo"}
        </button>
      </form>
      <div className="showData">
        <ul>
          {todoList.map(todo => (
            <li>{todo.title} 
            <span className="edits" onClick={() => editHandler(todo.id)}><button>Edit</button></span>
            <span className="deletes" onClick={() => deleteHandler(todo.id)}><button>Delete</button></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
