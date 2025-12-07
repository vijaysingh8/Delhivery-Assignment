import { createSlice } from "@reduxjs/toolkit";

const statuses = ["idle", "busy", "charging", "error"];

const generateBots = () =>
  Array.from({ length: 10 }).map((_, i) => ({
    id: `BOT-${i + 1}`,
    battery: Math.floor(Math.random() * 100),
    status: statuses[Math.floor(Math.random() * statuses.length)],
    currentTask: Math.random() > 0.5 ? `TASK-${i + 10}` : "None",
    speed: +(Math.random() * 2).toFixed(2),
    lastUpdated: new Date().toLocaleTimeString(),
  }));

const botsSlice = createSlice({
  name: "bots",
  initialState: {
    bots: generateBots(),
  },
  reducers: {
    updateBots(state) {
      state.bots = generateBots();
    },
  },
});

export const { updateBots } = botsSlice.actions;
export default botsSlice.reducer;
