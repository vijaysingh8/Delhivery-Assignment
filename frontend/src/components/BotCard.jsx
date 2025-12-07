function BotCard({ bot }) {
  return (
    <div className="border rounded p-4 shadow space-y-1">
      <h3 className="font-bold">{bot.id}</h3>
      <p>Battery: {bot.battery}%</p>
      <p>Status: {bot.status}</p>
      <p>Current Task: {bot.currentTask}</p>
      <p>Speed: {bot.speed} m/s</p>
      <p className="text-xs text-gray-500">
        Updated: {bot.lastUpdated}
      </p>
    </div>
  );
}

export default BotCard;
