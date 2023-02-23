import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
const Register = () => {
const [email, setEmail] = useState('');
const [password1, setPassword1] = useState('');
const [password2, setPassword2] = useState('');
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
      password1: password1,
      password2: password2
    };

    fetch('http://127.0.0.1:8000/api/v1/users/auth/register/', {
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
          setPassword1('');
          setPassword2('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };
  return (
  <>
    <div className="text-center m-5-auto">
      {loading===false&&<h2>CREATE AN ACCOUNT</h2>}
      {errors===true&&<h2>Cannot signup with provided credentials</h2>}
      <form action="/home">
        <p>
          <label>Email address</label>
          <br />
          <input type="text" value={email} name="email address" onChange={e=>setEmail(e.target.value)} required />
        </p>
        <p>
          <label>Password</label>
          <br />
          <input type="password" value={password1} name="password" onChange={e=>setPassword1(e.target.value)} required />
        </p>
        <p>
          <label>Confirm Password</label>
          <br />
          <input type="password" name="repeat-password" value={password2} onChange={e=>setPassword2(e.target.value)} required />
        </p>
        <p>
          <button id="sub_btn" type="submit">
            REGISTER
          </button>
        </p>
      </form>
      <footer>
        <p>
          Have already an account? <Link to="/LogIn">Login here</Link>.
        </p>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
    </>
  );
};

export default Register;
