import React, { useState, useEffect } from 'react';
import {  Outlet } from 'react-router-dom';
import { LoginContext } from './components/LoginContext';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function App() {




  // who am i function here

  

  const [loginStatus, setLoginStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [passw, setpassw] = useState('');


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    };
    
  const handlePasswChange = (e) => {
  setpassw(e.target.value);
  };
  
  const handleLogInSubmit = async (e) => {
      e.preventDefault();
      setEmail("");
      setpassw("");
      
      try {
          const userData = {
              email: email,
              password: passw,
          };
          
          const response = await axios.post('http://127.0.0.1:8000/login/', userData);
          
          if (response.data.email) {
            localStorage.setItem("token", response.data.token);
              // Login success
              setLoginStatus('success');
              
          } else {

              // Login failed
              setLoginStatus('error');
              setErrorMessage('Invalid email or password');
              alert("Invalid email or password.")
          }
      } catch (error) {
          // Handle request error
          setLoginStatus('error');
          setErrorMessage('An error occurred while logging in');
          console.error('Login failed:', error);
          alert(errorMessage)

          
      }
  };


  return (
    <>
    <LoginContext.Provider value={{loginStatus,setLoginStatus,handleLogInSubmit,handlePasswChange,handleEmailChange,email,passw}}>
      <Outlet />
    </LoginContext.Provider>
    </>
  );
}