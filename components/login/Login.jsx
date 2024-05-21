import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const { email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validations
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&!]).{8,}$/;

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address");
      return;
    } else if (!passwordPattern.test(password)) {
      setError("Password should contain at least 8 characters including at least one digit, one lowercase letter, one uppercase letter, and one special character like (@, #, %, &, !, $, etc…)");
      return;
    } else {
      // Clear any previous error
      setError("");

      try {
        // Mock API request for login
        // Replace this with actual API call
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });
        
        const data = await response.json();
        
        if (response.ok) {
          // Mock data, replace with actual response data
          // Example: data = { role: 'admin' }
          const { role } = data;

          // Clear form fields after successful login
          setFormData({ email: "", password: "" });

          // Redirect based on role
          if (role === 'admin') {
            navigate('/admin-dashboard');
          } else {
            navigate('/dashboard');
          }

        } else {
          // Handle error response
          setError(data.message || 'Login failed');
        }

      } catch (error) {
        setError('An error occurred. Please try again.');
      }
    }
  };

  useEffect(() => {
    // Placeholder for actual authentication check
    const isAuthenticated = false; // Set this to true if the user is authenticated
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [navigate]);

  return (
    <>
      <section className="container">
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead"><i className="fas fa-user"></i> Sign into your Account</p>
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
              value={password} onChange={e => onChange(e)}
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&!]).{8,}$"
              title="Password should contain at least 8 characters including at least one digit, one lowercase letter, one uppercase letter, and one special character like (@, #, %, &, !, $, etc…)"
              required
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
        <p className="my-1">
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
        <p className="my-1">
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </section>
    </>
  )
}

export default Login;
