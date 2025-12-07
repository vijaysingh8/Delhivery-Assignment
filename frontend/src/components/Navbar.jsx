import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";

function Navbar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between">
      <h1 className="font-bold">Warehouse Dashboard</h1>

      {isLoggedIn && (
        <div className="space-x-4">
          <Link to="/">Dashboard</Link>
          <Link to="/bots">Bots</Link>
          <Link to="/create-task">Create Task</Link>
          <Link to="/tasks">Task Queue</Link>
          <Link to="/analytics">Analytics</Link>
          <Link to="/map">Map</Link>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
