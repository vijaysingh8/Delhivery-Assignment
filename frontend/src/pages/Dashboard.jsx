import { useSelector } from "react-redux";

function Dashboard() {
  const bots = useSelector((state) => state.bots.bots);
  const tasks = useSelector((state) => state.tasks.queue);

  const totalBots = bots.length;
  const idleBots = bots.filter(b => b.status === "idle").length;
  const errorBots = bots.filter(b => b.status === "error").length;
  const activeTasks = bots.filter(b => b.status === "busy").length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="Total Bots" value={totalBots} />
      <Card title="Idle Bots" value={idleBots} />
      <Card title="Bots in Error" value={errorBots} />
      <Card title="Active Tasks" value={activeTasks} />
      <Card title="Pending Tasks" value={tasks.length} />
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white shadow rounded p-6 text-center">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}

export default Dashboard;
