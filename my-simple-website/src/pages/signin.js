// pages/signin.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/signin', { username, password });
      const { message, role } = response.data;
      setMessage(message);

      if (response.status === 200) {
        if (role === 'provider') {
          router.push('/service-provider');
        } else if (role === 'gainer') {
          router.push('/services');
        } else {
          setMessage('Invalid role!');
        }
      }
    } catch (error) {
      console.error('Login failed:', error);
      setMessage('Invalid credentials!');
    }
  };

  return (
    <>
      <div className="loginContainer">
        <div className="loginCard">
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit} className="form">
            <div className="inputGroup">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input"
                required
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                required
              />
            </div>
            <button type="submit" className="loginSubmit">
              Sign In
            </button>
          </form>
          <p className="message">{message}</p>
          <div className="createAccount">
            <p>Don't have an account?</p>
            <Link href="/create-account">
              <button className="createAccountButton">Create Account</button>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .loginContainer {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          font-family: 'Arial', sans-serif;
        }

        .loginCard {
          background: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
          text-align: center;
        }

        .loginCard h1 {
          margin-bottom: 1.5rem;
          font-size: 2rem;
          color: #333;
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .inputGroup {
          text-align: left;
        }

        .inputGroup label {
          font-size: 0.9rem;
          color: #555;
          margin-bottom: 0.5rem;
          display: block;
        }

        .input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .input:focus {
          outline: none;
          border-color: #007bff;
        }

        .loginSubmit {
          background: #007bff;
          color: white;
          padding: 0.75rem;
          border: none;
          border-radius: 5px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .loginSubmit:hover {
          background: #0056b3;
        }

        .message {
          margin-top: 1rem;
          color: #d9534f;
          font-size: 0.9rem;
        }

        .createAccount {
          margin-top: 1.5rem;
        }

        .createAccount p {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 0.5rem;
        }

        .createAccountButton {
          background: transparent;
          border: 1px solid #007bff;
          color: #007bff;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .createAccountButton:hover {
          background: #007bff;
          color: white;
        }
      `}</style>
    </>
  );
}