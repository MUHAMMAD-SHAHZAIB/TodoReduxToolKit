import { createSlice, nanoid } from "@reduxjs/toolkit";

// *******Step 1********
const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

// *******Step 2********
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action);
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todoToUpdate = state.todos.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.text = text;
      }
    },
  },
});

// *******Step 3********
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

// *******Step 4********
export default todoSlice.reducer;
