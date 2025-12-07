import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Bots from "./pages/Bots";
import TaskCreate from "./pages/TaskCreate";
import TaskQueue from "./pages/TaskQueue";
import Analytics from "./pages/Analytics";
import MapPage from "./pages/MapPage";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 p-4">
        <Routes>
          <Route path="/login" element={<Login />} />

          {isLoggedIn ? (
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/bots" element={<Bots />} />
              <Route path="/create-task" element={<TaskCreate />} />
              <Route path="/tasks" element={<TaskQueue />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/map" element={<MapPage />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
