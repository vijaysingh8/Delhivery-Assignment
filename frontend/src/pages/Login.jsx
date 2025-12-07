import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/auth/authSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return alert("All fields required");

    dispatch(login({ email }));
     navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-4">
      <h2 className="text-xl font-bold">Login</h2>
      <input
        className="border p-2 w-full"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="border p-2 w-full"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 w-full">
        Login
      </button>
    </form>
   
  );
}

export default Login;

