import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
import Feedback from './pages/Feedback'
import Home from './pages/Home'
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/feedback" 
          element={
              <ProtectedRoute><Feedback /></ProtectedRoute>
                } 
        />
        <Route path="*" element={<Login />} />
      </Routes>
   
    </BrowserRouter>
  );
}

export default App;