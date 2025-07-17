import React, { useState } from 'react';
import axios from 'axios';

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/feedback', formData);
      alert('Feedback submitted!');
      setFormData({ name: '', email: '', feedback: '' });
    } catch (err) {
      console.error('Feedback error:', err);
      alert('Failed to submit feedback.');
    }
  };

  return (
    <div
      style={{
        width: '400px',
        margin: '100px auto',
        padding: '45px 35px',
        borderRadius: '20px',
        background: 'linear-gradient(145deg, #E6E6FA, #D8BFD8)', // lavender gradient
        boxShadow: '0 10px 25px rgba(138, 43, 226, 0.2)',
        fontFamily: 'Segoe UI, sans-serif',
        border: '1px solid #DDA0DD',
      }}
    >
      <form onSubmit={handleSubmit}>
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '30px',
            color: '#4B0082',
            letterSpacing: '1px',
          }}
        >
          Share Your Feedback
        </h2>

        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
            border: '1px solid #DA70D6',
            borderRadius: '10px',
            fontSize: '15px',
            backgroundColor: '#F8F8FF',
            boxShadow: 'inset 0 0 6px rgba(138,43,226,0.1)',
            outline: 'none',
          }}
        />

        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
            border: '1px solid #DA70D6',
            borderRadius: '10px',
            fontSize: '15px',
            backgroundColor: '#F8F8FF',
            boxShadow: 'inset 0 0 6px rgba(138,43,226,0.1)',
            outline: 'none',
          }}
        />

        <textarea
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
          placeholder="Your feedback..."
          required
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '25px',
            border: '1px solid #DA70D6',
            borderRadius: '10px',
            fontSize: '15px',
            minHeight: '110px',
            resize: 'vertical',
            backgroundColor: '#F8F8FF',
            boxShadow: 'inset 0 0 6px rgba(138,43,226,0.1)',
            outline: 'none',
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
            fontSize: '16px',
            fontWeight: 'bold',
            letterSpacing: '1px',
            cursor: 'pointer',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.03)';
            e.target.style.boxShadow = '0 4px 20px rgba(186,85,211,0.5)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = 'none';
          }}
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;
