import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");

  const { email, password, confirmPassword } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validations
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&!]).{8,}$/;

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address");
    } else if (!passwordPattern.test(password)) {
      setError("Password should contain at least 8 characters including at least one digit, one lowercase letter, one uppercase letter, and one special character like (@, #, %, &, !, $, etc…)");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      // Clear any previous error
      setError("");

      try {
        // Mock API request for registration
        // Replace this with actual API call
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
          // Mock successful registration
          alert("Registration successful");

          // Clear form fields after successful registration
          setFormData({ email: "", password: "", confirmPassword: "" });

          // Navigate to login page
          navigate('/login');
        } else {
          // Handle error response
          setError(data.message || 'Registration failed');
        }

      } catch (error) {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <>
      <section className="container">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
        <form className="form" onSubmit={e => onSubmit(e)}>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="form-group">
            <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&!]).{8,}$"
              title="Password should contain at least 8 characters including at least one digit, one lowercase letter, one uppercase letter, and one special character like (@, #, %, &, !, $, etc…)"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </section>
    </>
  )
}

export default Register;
