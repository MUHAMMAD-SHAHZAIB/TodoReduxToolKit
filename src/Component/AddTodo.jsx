import React, { useState } from "react";
import { MdLibraryAdd } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
const AddTodo = ({ onAddOrUpdateTodo, input, setInput, isUpdateMode }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    onAddOrUpdateTodo();
  };

  return (
    <form
      onSubmit={submitHandler}
      className="space-x-3 mt-12 flex justify-center"
    >
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {isUpdateMode ? (
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          <BsPencilSquare className="w-6 h-6" />
        </button>
      ) : (
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          <MdLibraryAdd className="w-6 h-6" />
        </button>
      )}
    </form>
  );
};

export default AddTodo;
