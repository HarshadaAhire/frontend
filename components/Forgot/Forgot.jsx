import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Forgot.css';

const Forgot= () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const onChange = (e) => setEmail(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address");
      return;
    } else {
      // Clear any previous error
      setError("");

      try {
        // Mock API request for password reset
        // Replace this with actual API call
        const response = await fetch('/api/forgot-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email })
        });

        const data = await response.json();

        if (response.ok) {
          // Mock success message
          setMessage("Password reset link has been sent to your email address");
          
          // Clear email field after successful request
          setEmail("");
        } else {
          // Handle error response
          setError(data.message || 'Failed to send password reset link');
        }

      } catch (error) {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <>
      <section className="container">
        <h1 className="large text-primary">Forgot Password</h1>
        <p className="lead"><i className="fas fa-user"></i> Enter your email to reset your password</p>
        <form className="form" onSubmit={e => onSubmit(e)}>
          {error && <div className="alert alert-danger">{error}</div>}
          {message && <div className="alert alert-success">{message}</div>}
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Send Reset Link" />
        </form>
        <p className="my-1">
          <Link to="/login">Back to Login</Link>
        </p>
      </section>
    </>
  )
}

export default Forgot;
