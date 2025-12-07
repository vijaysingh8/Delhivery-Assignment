import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/tasksSlice";
import { useNavigate } from "react-router-dom";

function TaskCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    pickup: "",
    drop: "",
    priority: "medium",
    comments: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.pickup || !form.drop) {
      alert("Pickup and Drop are required");
      return;
    }

    dispatch(
      addTask({
        id: Date.now(),
        ...form,
        createdAt: new Date().toLocaleTimeString(),
      })
    );

    navigate("/tasks");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto space-y-4 bg-white p-6 shadow rounded"
    >
      <h2 className="text-xl font-bold">Create New Task</h2>

      <input
        name="pickup"
        placeholder="Pickup Location"
        className="border p-2 w-full"
        onChange={handleChange}
      />

      <input
        name="drop"
        placeholder="Drop Location"
        className="border p-2 w-full"
        onChange={handleChange}
      />

      <select
        name="priority"
        className="border p-2 w-full"
        onChange={handleChange}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <textarea
        name="comments"
        placeholder="Comments"
        className="border p-2 w-full"
        onChange={handleChange}
      />

      <button className="bg-green-600 text-white px-4 py-2 w-full">
        Add Task
      </button>
    </form>
  );
}

export default TaskCreate;
