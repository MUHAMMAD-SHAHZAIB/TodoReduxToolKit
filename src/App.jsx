import React, { useState } from "react";

import AddTodo from "./Component/AddTodo";
import Todos from "./Component/Todos";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, removeTodo } from "./features/todo/TodoSlice";
import "./app.css";

const App = () => {
  // Redux hooks
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  // State hooks
  const [input, setInput] = useState("");
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  // Handles adding or updating a todo
  const handleAddOrUpdateTodo = () => {
    // If input is empty or only contains whitespace, return early
    if (!input.trim()) return;
    if (isUpdateMode) {
      // Dispatch updateTodo action with updated todo object
      dispatch(updateTodo({ id: updateId, text: input }));
      setInput("");
      setIsUpdateMode(false);
      setUpdateId(null);
    } else {
      // Dispatch addTodo action with new todo text
      dispatch(addTodo(input));
      setInput("");
    }
  };

  // Handles updating a todo
  const handleUpdateTodo = (todo) => {
    setIsUpdateMode(true);
    setInput(todo.text);
    setUpdateId(todo.id);
  };

  // Handles removing a todo
  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mt-5 p-3 rounded-md text-gray-800 bg-neutral-400">
        REACT TODOS ASSIGNMENT TASK
      </h1>

      <AddTodo
        onAddOrUpdateTodo={handleAddOrUpdateTodo}
        input={input}
        setInput={setInput}
        isUpdateMode={isUpdateMode}
      />
      <Todos
        onRemoveTodo={handleRemoveTodo}
        todos={todos}
        onUpdateTodo={handleUpdateTodo}
      />
    </div>
  );
};

export default App;
