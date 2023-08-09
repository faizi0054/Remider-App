
"use client"
// import React, { useState } from 'react';
// import Image from 'next/image'
// import styles from './page.module.css'
// import LoginForm from './components/LoginForm'
// import Main from './components/Main'

// export default function Home() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
    
//     setIsLoggedIn(true); 
//   };

//   return (
//     <div>
//       {!isLoggedIn ? <LoginForm onLogin={handleLogin} /> : <Main />}
//     </div>
//   );
// }































import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import Main from './components/Main';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in from localStorage
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true'); // Store login status in localStorage
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn'); // Remove login status from localStorage
  };

  return (
    <div>
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <Main onLogout={handleLogout} />
      )}
    </div>
  );
}

