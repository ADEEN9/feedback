import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/register', form);
    navigate('/login');
  };

  return (
    <div
      style={{
        width: '380px',
        margin: '80px auto',
        padding: '50px 40px',
        borderRadius: '20px',
        background: 'linear-gradient(145deg, #E6E6FA, #D8BFD8)', // Lavender gradient
        boxShadow: '0 8px 25px rgba(138, 43, 226, 0.2)',
        fontFamily: 'Segoe UI, sans-serif',
        border: '1px solid #DDA0DD', // Plum border
      }}
    >
      <form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#4B0082' }}>Create Account</h2>

        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
            border: '1px solid #DA70D6',
            borderRadius: '10px',
            fontSize: '15px',
            backgroundColor: '#F8F8FF',
            outline: 'none',
            boxShadow: 'inset 0 0 5px rgba(138,43,226,0.1)',
          }}
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
            border: '1px solid #DA70D6',
            borderRadius: '10px',
            fontSize: '15px',
            backgroundColor: '#F8F8FF',
            outline: 'none',
            boxShadow: 'inset 0 0 5px rgba(138,43,226,0.1)',
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
            padding: '12px',
            marginBottom: '25px',
            border: '1px solid #DA70D6',
            borderRadius: '10px',
            fontSize: '15px',
            backgroundColor: '#F8F8FF',
            outline: 'none',
            boxShadow: 'inset 0 0 5px rgba(138,43,226,0.1)',
          }}
        />

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '14px',
            background: 'linear-gradient(to right, #9370DB, #BA55D3)',
            color: '#fff',
            border: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            letterSpacing: '1px',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.02)';
            e.target.style.boxShadow = '0 4px 15px rgba(186,85,211,0.4)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = 'none';
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
