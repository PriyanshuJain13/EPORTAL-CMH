import React, { useState } from 'react';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState(''); // Assuming you use a select element for role selection

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

  const handleRegister = () => {
    // TODO: Send a POST request to your server with user registration data.
    // You should use a library like axios for this.

    // Example:
    // axios.post('/api/register', { username, password, email, role })
    //   .then((response) => {
    //     // Handle successful registration
    //   })
    //   .catch((error) => {
    //     // Handle registration error
    //   });
  };

  return (
    <div className='absolute top-1/4 left-1/3 border border-sky-500 m-4 p-8 w-1/4'>
      <h2 className='text-center mb-10 text-4xl text-sky-500'>Register</h2>
      <form className='space-y-5'>
        <div className='flex flex-col space-y-2'>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} placeholder="Enter your username" className='border border-slate-500 rounded-md p-2'/>
        </div>
        <div className='flex flex-col space-y-2'>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} placeholder="Enter your password" className='border border-slate-500 rounded-md p-2'/>
        </div>
        <div className='flex flex-col space-y-2'>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your Email" className='border border-slate-500 rounded-md p-2'/>
        </div>
        <div >
          <label>Role:</label>
          <select value={role} onChange={handleRoleChange} className = "">
            <option value="judge">Judge</option>
            <option value="lawyer">Lawyer</option>
            <option value="litigant">Litigant</option>
            <option value="admin">Admin</option>
          </select>
          <div>
          <a href='/login' className='text-blue-800 text-sm'>Already Registered?</a>

          </div>
        </div>
        <button type="button" onClick={handleRegister} className = "bg-sky-500 p-3 rounded-lg text-white">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
