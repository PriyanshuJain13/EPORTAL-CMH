import React, { useState } from "react";
import "./App.css";
import LoginForm from "./Components/LoginForm";
import RegisterForm from "./Components/RegisterForm";
import MainPage from "./Components/MainPage";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

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
        </Routes>
      </BrowserRouter>
      {/* <MainPage /> */}
      {/* <div>{currentFrom === "login" ? <LoginForm /> : <RegisterForm />}</div> */}
    </>
  );
}

export default App;
