import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    queue: [],
  },
  reducers: {
    addTask(state, action) {
      state.queue.push(action.payload);
    },
    removeTask(state) {
      state.queue.shift();
    },
  },
});

export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
