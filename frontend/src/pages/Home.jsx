import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    padding: '14px 30px',
    margin: '15px',
    fontSize: '17px',
    borderRadius: '30px',
    border: 'none',
    cursor: 'pointer',
    background: 'linear-gradient(to right, #BA55D3, #9370DB)', // Orchid to MediumPurple
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: '1px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(186, 85, 211, 0.3)',
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #E6E6FA, #D8BFD8)', // Lavender gradient
        fontFamily: 'Segoe UI, sans-serif',
        padding: '20px',
      }}
    >
      <h1
        style={{
          marginBottom: '30px',
          color: '#4B0082', // Indigo
          fontSize: '36px',
          fontWeight: '600',
          textShadow: '1px 1px 4px rgba(75, 0, 130, 0.2)',
        }}
      >
        Welcome to the Login Portal
      </h1>

      <p
        style={{
          fontSize: '18px',
          marginBottom: '20px',
          color: '#6A5ACD', // SlateBlue
        }}
      >
        New here? Get started by creating an account.
      </p>

      <button
        style={buttonStyle}
        onClick={() => navigate('/register')}
        onMouseOver={(e) => {
          e.target.style.transform = 'scale(1.05)';
          e.target.style.boxShadow = '0 6px 16px rgba(186, 85, 211, 0.5)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 4px 12px rgba(186, 85, 211, 0.3)';
        }}
      >
        Click here to Register
      </button>
    </div>
  );
};

export default Home;
