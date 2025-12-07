import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBots } from "../features/bots/botsSlice";
import BotCard from "../components/BotCard";

function Bots() {
  const dispatch = useDispatch();
  const bots = useSelector((state) => state.bots.bots);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateBots());
    }, 10000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {bots.map(bot => (
        <BotCard key={bot.id} bot={bot} />
      ))}
    </div>
  );
}

export default Bots;
