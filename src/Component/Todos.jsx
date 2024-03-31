import React from "react";
import { MdDelete } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";

const Todos = ({ onRemoveTodo, todos, onUpdateTodo }) => {
  return (
    <>
      <h1 className="text-3xl font-bold mt-5">TODOS LIST</h1>

      {todos.length <= 0 ? (
        <p className="mt-20">No todo items</p>
      ) : (
        <ul className="list-none">
          {todos.map((todo) => (
            <li
              className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
              key={todo.id}
            >
              <div className="text-white">{todo.text}</div>
              <div>
                <button
                  onClick={() => onUpdateTodo(todo)}
                  className="text-white bg-blue-500 border-0 py-1 mx-5 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                >
                  <BsPencilSquare className="w-6 h-8" />
                </button>

                <button
                  onClick={() => onRemoveTodo(todo.id)}
                  className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                >
                  <MdDelete className="w-6 h-8" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Todos;
