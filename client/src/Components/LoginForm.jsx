import React, { useState } from "react";
import bgImage from "../assets/LandingBg.png";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate()

  let bgStyle = {
    height: "100vh",
    width: "100vw",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${bgImage})`,
  };
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    // TODO: Send a POST request to your server with the username and hashed password.
    // You should use a library like axios for this.

    // Example:
    // axios.post('/api/login', { username, password })
    //   .then((response) => {
    //     // Handle successful login
    //   })
    //   .catch((error) => {
    //     // Handle login error
    //   });
    e.preventDefault();
    console.log(e.username);

    navigate('/dashboard')
  };

  return (
    <div style={bgStyle}>
      <div className="tempNav h-16 bg-opacity-80 bg-[#460D0D] flex flex-row items-center p-3">
        <Link to="/" className="">
          <div className="logo"></div>
        </Link>
      </div>
      <div className="absolute top-1/4 left-1/3 m-4 p-8 w-1/3 bg-black bg-opacity-30 rounded-lg">
        <h2 className="text-center mb-10 text-5xl font-bold text-white">
          Login
        </h2>
        <form className="space-y-5">
          <div className="flex flex-col space-y-2">
            <label className="text-white text-3xl">Username:</label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Enter your username"
              className="border border-slate-500 rounded-md p-2 bg-white bg-opacity-20 text-white"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-white text-3xl">Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              className="border border-slate-500 rounded-md p-2 bg-white bg-opacity-20 text-white"
            />
          </div>
          <div>
            <Link to="/register" className="text-blue-800 text-md">
              Not Registered?
            </Link>
          </div>
          <button
            type="button"
            onClick={handleLogin}
            className="btn p-4 rounded-lg text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
