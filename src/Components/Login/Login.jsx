import React, { useState } from 'react';
import './Login.css';
import email_icon from '../../assets/email.png';
import password_icon from '../../assets/password.png';
import user_icon from '../../assets/person.png';

const Login = () => {
  const [action, setAction] = useState("Login");
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage('');

    // Basic client-side validation
    if (action === "Sign Up" && !username) {
      setError('Please enter a username.');
      setLoading(false);
      return;
    }
    if (!email || !password) {
      setError('Please enter both email and password.');
      setLoading(false);
      return;
    }

    // Simulate backend processing
    setTimeout(() => {
      setMessage(action === "Login" ? 'Login successful!' : 'Sign up successful!');
      setLoading(false);
      // Redirect to home page
      window.location.href = '/';
    }, 1000); // Simulate 1 second network delay

    /*
    // Original backend processing section (commented out)
    let url = '';
    let body = {};

    if (action === "Login") {
      url = '/api/login';
      body = { email, password };
    } else {
      url = '/api/signup'; // Assuming a signup endpoint
      body = { username, email, password };
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || (action === "Login" ? 'Login failed' : 'Sign up failed'));
      }

      const data = await response.json();
      setMessage(data.message || (action === "Login" ? 'Login successful!' : 'Sign up successful!'));
      console.log(action + ' successful:', data);

    } catch (err) {
      setError(err.message);
      console.error(action + ' error:', err);
    } finally {
      setLoading(false);
    }
    */
  };

  return (
    <div className='login-container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <form onSubmit={handleSubmit} className='inputs'>
        {action === "Sign Up" && (
          <div className='input'>
            <img src={user_icon} alt="User Icon" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required={action === "Sign Up"}
            />
          </div>
        )}
        <div className='input'>
          <img src={email_icon} alt="Email Icon" />
          <input
            type="email"
            placeholder="Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='input'>
          <img src={password_icon} alt="Password Icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {action === "Login" && (
          <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
        )}
        {error && <p className="error-message">{error}</p>}
        {message && <p className="success-message">{message}</p>}
        <div className='submit-container'>
          <button type="submit" className='submit' disabled={loading}>
            {loading ? (action === "Login" ? 'Logging in...' : 'Signing up...') : action}
          </button>
        </div>
        {action === "Sign Up" ? (
          <div className="register-link">
            Already have an account? <span onClick={() => setAction("Login")}>Login Here!</span>
          </div>
        ) : (
          <div className="register-link">
            Don't have an account? <span onClick={() => setAction("Sign Up")}>Register Here!</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
