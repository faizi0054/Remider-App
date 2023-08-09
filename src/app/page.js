
"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import LoginForm from './components/LoginForm'
import Main from './components/Main'

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    
    setIsLoggedIn(true); 
  };

  return (
    <div>
      {!isLoggedIn ? <LoginForm onLogin={handleLogin} /> : <Main />}
    </div>
  );
}

