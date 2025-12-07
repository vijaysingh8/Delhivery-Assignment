import { useSelector } from "react-redux";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function Analytics() {
  const bots = useSelector((state) => state.bots.bots);

  const statusData = [
    { name: "Idle", value: bots.filter(b => b.status === "idle").length },
    { name: "Busy", value: bots.filter(b => b.status === "busy").length },
    { name: "Charging", value: bots.filter(b => b.status === "charging").length },
    { name: "Error", value: bots.filter(b => b.status === "error").length },
  ];

  const batteryData = bots.map(bot => ({
    name: bot.id,
    battery: bot.battery,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-4 shadow rounded">
        <h3 className="font-bold mb-2">Bot Status Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={statusData} dataKey="value" label>
              {statusData.map((_, i) => (
                <Cell key={i} fill={["#22c55e","#3b82f6","#f59e0b","#ef4444"][i]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 shadow rounded">
        <h3 className="font-bold mb-2">Battery Levels</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={batteryData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="battery" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Analytics;
