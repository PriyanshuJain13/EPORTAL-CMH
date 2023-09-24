import React, { useState } from "react";
import "./App.css";
import LoginForm from "./Components/LoginForm";
import RegisterForm from "./Components/RegisterForm";
import MainPage from "./Components/MainPage";
import Dashboard from "./Components/Dashboard";
import userProfile from './Components/UserProfile'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import UserProfile from "./Components/UserProfile";

function App() {
  const [currentFrom, setCurrentForm] = useState("l");
  const [IsRegistered, setIsRegistered] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<MainPage/>}></Route>
          <Route path = "/login" element = {<LoginForm/>}></Route>
          <Route path = "/register" element = {<RegisterForm/>}></Route>
          <Route path = "/dashboard" element = {<Dashboard/>}></Route>
          <Route path = "/dashboard/profile" element = {<UserProfile/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <MainPage /> */}
      {/* <div>{currentFrom === "login" ? <LoginForm /> : <RegisterForm />}</div> */}
    </>
  );
}

export default App;
