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
    <div>
      <h2>Register</h2>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Role:</label>
          <select value={role} onChange={handleRoleChange}>
            <option value="judge">Judge</option>
            <option value="lawyer">Lawyer</option>
            <option value="litigant">Litigant</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="button" onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
