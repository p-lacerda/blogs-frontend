import React, { } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import MainScreen from './pages/MainScreen';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="login" element={<SignUp />} />
    </Routes>
  );
}

export default App;
