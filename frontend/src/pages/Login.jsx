import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Header from '../Header';
import Footer from '../Footer';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/login', form);
    localStorage.setItem('token', res.data.token);
    navigate('/feedback');
  };

  return (
    <>
      <Header />

      <div
        style={{
          width: '350px',
          margin: '80px auto',
          padding: '40px',
          borderRadius: '15px',
          boxShadow: '0 0 15px rgba(138, 43, 226, 0.4)',
          background: '#E6E6FA',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <form onSubmit={handleSubmit}>
          <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#4B0082' }}>Login</h2>

          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '15px',
              border: '1px solid #D8BFD8',
              borderRadius: '8px',
              fontSize: '14px',
              backgroundColor: '#F8F8FF',
            }}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '25px',
              border: '1px solid #D8BFD8',
              borderRadius: '8px',
              fontSize: '14px',
              backgroundColor: '#F8F8FF',
            }}
          />

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#9370DB',
              color: '#fff',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'background-color 0.3s ease',
            }}
          >
            Login
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Login;
