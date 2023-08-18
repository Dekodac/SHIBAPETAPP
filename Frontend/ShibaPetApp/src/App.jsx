import React, { useState, useEffect } from 'react';
import {  Outlet } from 'react-router-dom';
import HomePage from './components/Homepage';



export default function App() {

  return (
    <>
      <Outlet />
    </>
  );
}