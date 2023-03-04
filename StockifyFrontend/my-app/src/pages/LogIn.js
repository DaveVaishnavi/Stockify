import React from "react";
import { Link } from "react-router-dom";
import "../components/LogInPage/LogInPage.css";
import { useState } from 'react';
import { useEffect } from 'react';
const LogInPage = () => {
const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);
    useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      window.location.replace('http://localhost:3000/dashboard');
    } else {
      setLoading(false);
    }
  }, []);
  const onSubmit = e => {
    e.preventDefault();
    const user = {
      email: email,
      password: password
    };
    fetch('http://127.0.0.1:8000/api/v1/users/auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.key) {
          localStorage.clear();
          localStorage.setItem('token', data.key);
          window.location.replace('http://localhost:3000/dashboard');
        } else {
          setEmail('');
          setPassword('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };
  return (
    <div className="text-center m-5-auto">
      {loading===false&&<h2>LOGIN</h2>}
      {errors===true&&<h2>Cannot Login with provided credentials</h2>}
      {loading===false&&(
      <form action="/home">
        <p>
          <label>Username or email address</label>
          <br />
          <input type="text" name="first_name" required />
        </p>
        <p>
          <label>Password</label>
          <Link to="/forget-password">
            <label className="right-label">Forget password?</label>
          </Link>
          <br />
          <input type="password" name="password" required />
        </p>
        <p>
          <button id="sub_btn" type="submit" onClick={() => this.LoginRequest()}>
            Login
          </button>
        </p>
      </form>
      )}
    </div>
  );
};

export default LogInPage;