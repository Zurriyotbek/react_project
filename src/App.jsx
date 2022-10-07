import "./App.css";

import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();

    let newTodo = {
      id: todos.length,
      name: inputValue,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
    console.log(todos);
    setInputValue("");
  }

  function handleClick(id) {
    // let filteredTodos = todos.map((todo) => {
    //   if (todo.id === id) {
    //     return (todo.isCompleted = !todo.isCompleted);
    //   }
    //   return todo;
    // });

    // setTodos(filteredTodos);

    console.log(id);
  }

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
        />
      </form>

      <ul>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              style={{
                marginBottom: "10px",
                backgroundColor: !todo.isCompleted ? "red" : "green",
              }}
              onClick={() => handleClick(todo.id)}
            >
              {todo.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
