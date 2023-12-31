import React, { useState } from "react";
import bgImage from "../assets/LandingBg.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const RegisterForm = () => {
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
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(""); // Assuming you use a select element for role selection
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/register", {
        username,
        password,
        email,
        role,
      })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={bgStyle}>
      <div className="tempNav h-16 bg-opacity-80 bg-[#460D0D] flex flex-row items-center p-3">
        <Link to="/">
          <div className="logo"></div>
        </Link>
      </div>
      <div className="absolute mt-32 left-1/3 border m-4 p-8 w-1/3 bg-black bg-opacity-30 rounded-lg">
        <h2 className="text-center mb-10 text-5xl font-bold text-white">
          Register
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
          <div className="flex flex-col space-y-2">
            <label className="text-white text-3xl">Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your Email"
              className="border border-slate-500 rounded-md p-2 bg-white bg-opacity-20 text-white"
            />
          </div>
          <div>
            <label className="text-white text-3xl mr-3">Role:</label>
            <select
              value={role}
              onChange={handleRoleChange}
              className="p-2 rounded-lg"
            >
              <option value="judge">Judge</option>
              <option value="lawyer">Lawyer</option>
              <option value="litigant">Litigant</option>
              <option value="admin">Admin</option>
            </select>
            <div></div>
          </div>
          <div>
            <Link to="/login" className="text-blue-800 text-md">
              Already Registered?
            </Link>
          </div>

          <button
            type="button"
            onClick={handleRegister}
            className="btn p-3 rounded-lg text-white"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
