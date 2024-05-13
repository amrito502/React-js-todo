import { useState } from "react";

export default function Test() {
    const [todoTitle, setTodoTitle] = useState("");
    const [todoList, setTodoList] = useState([]);
    const createHandeler = (e) => {
        e.preventDefault();
        setTodoList([...todoList,todoTitle]);
        setTodoTitle("");
    }
  return (
    <div>
      <form>
        <input value={todoTitle} type="text" onChange={(e)=>setTodoTitle(e.target.value)}/>
        <button onClick={(e)=>createHandeler(e)}>Add todo</button>
      </form>
      <ul>
        {todoList.map(item => (
            <li>
                {item}
            </li>
        ))}
      </ul>
    </div>
  );
}
