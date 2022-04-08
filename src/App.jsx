import React, { } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import SignUp from './pages/SignUp';
import MainScreen from './pages/MainScreen';
import ProtectedRoutes from './ProtectedRoutes';

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<MainScreen />} />
      </Route>
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
