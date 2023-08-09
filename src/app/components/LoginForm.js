 import React, { useState } from 'react';
import styles from '../styles/LoginForm.module.css';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const user = { email, password };
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Congratulations! You are logged in.');

    setEmail('');
    setPassword('');
    onLogin();
  };

  return (
    <div className={styles.container}>
      <h2>Login Form</h2>
      <div className={styles['form-group']}>
         <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles['form-group']}>
         <input
         type="password"
          placeholder="Password"
           value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
               </div>
      <button onClick={handleLogin} className={styles.button}>
        Login
      </button>
    </div>
  );
};

export default LoginForm;
