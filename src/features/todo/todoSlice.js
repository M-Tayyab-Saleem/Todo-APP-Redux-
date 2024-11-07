import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [{ id: "123", task: "sleep", isDone: false }],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload.task,
        isDone: false,
      };

      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      state.filter((el) => el.id != action.payload.id);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
