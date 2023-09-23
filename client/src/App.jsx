import React , {useState} from 'react';
import "./App.css";
import LoginForm from "./Components/LoginForm";
import RegisterForm from './Components/RegisterForm';

function App() {
  const [currentFrom,setCurrentForm] = useState('l')
  return (
    <>
      <div>
        {
          currentFrom === 'login'? <LoginForm />:<RegisterForm />
        }

      </div>
    </>
  );
}

export default App;
