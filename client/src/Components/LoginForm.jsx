import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
  };

  return (
    <div className='absolute top-1/4 left-1/3 border border-sky-500 m-4 p-8 w-1/4'>
      <h2 className='text-center mb-10 text-4xl text-sky-500'>Login</h2>
      <form className='space-y-5'>
        <div className='flex flex-col space-y-2'>
          <label className=''>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} placeholder="Enter your username" className='border border-slate-500 rounded-md p-2'/>
        </div>
        <div className='flex flex-col space-y-2'>
          <label className=''>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} placeholder="Enter your username" className='border border-slate-500 rounded-md p-2'/>
        </div>
        <div>
        <a href='/register' className='text-blue-800 text-sm'>Not Registered?</a>
        </div>
        <button type="button" onClick={handleLogin} className = "bg-sky-500 p-3 rounded-lg text-white">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
