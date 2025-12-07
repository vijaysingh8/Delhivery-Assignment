import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../features/tasks/tasksSlice";

function TaskQueue() {
  const tasks = useSelector((state) => state.tasks.queue);
  const dispatch = useDispatch();

  useEffect(() => {
    if (tasks.length === 0) return;

    const interval = setInterval(() => {
      dispatch(removeTask());
    }, 3000);

    return () => clearInterval(interval);
  }, [tasks.length, dispatch]);

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Task Queue</h2>

      {tasks.length === 0 && (
        <p className="text-gray-500">No pending tasks</p>
      )}

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="border p-3 rounded bg-white shadow"
          >
            <p>
              <b>Pickup:</b> {task.pickup} → <b>Drop:</b> {task.drop}
            </p>
            <p>
              <b>Priority:</b> {task.priority}
            </p>
            <p className="text-xs text-gray-500">
              Created at: {task.createdAt}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskQueue;
