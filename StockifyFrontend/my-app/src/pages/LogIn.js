import React from "react";
import { Link } from "react-router-dom";
import "../components/LogInPage/LogInPage.css";
import { useState } from 'react';
import { useEffect } from 'react';
import { TextField, Button, Box, Alert, Typography, CircularProgress } from '@mui/material';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from "../services/userAuthApi";
import { getToken, storeToken } from "../services/LocalStorageService";
import { setUserToken } from "../features/authSlice";
const UserLogin = () => {
  const [server_error, setServerError] = useState({})
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation()
  const dispatch = useDispatch()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
      password: data.get('password'),
    }
    const res = await loginUser(actualData)
    if (res.error) {
      // console.log(typeof (res.error.data.errors))
      // console.log(res.error.data.errors)
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      console.log(typeof (res.data))
      console.log(res.data)
      storeToken(res.data.token)
      let { access_token } = getToken()
      dispatch(setUserToken({ access_token: access_token }))
      navigate('/')
    }
  }
  let { access_token } = getToken()
  useEffect(() => {
    dispatch(setUserToken({ access_token: access_token }))
  }, [access_token, dispatch])


  return <>
    {server_error.non_field_errors ? console.log(server_error.non_field_errors[0]) : ""}
    {server_error.email ? console.log(server_error.email[0]) : ""}
    {server_error.password ? console.log(server_error.password[0]) : ""}
    <Box component='form' noValidate sx={{ mt: 1 }} id='login-form' onSubmit={handleSubmit}>
      <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
      {server_error.email ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</Typography> : ""}
      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
      {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password[0]}</Typography> : ""}
      <Box textAlign='center'>
        {isLoading ? <CircularProgress /> : <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button>}
      </Box>
      <NavLink to='/sendpasswordresetemail' >Forgot Password ?</NavLink>
      {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
    </Box>
  </>;
};

export default UserLogin;

// const LogInPage = () => {
// const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState(false);
//   const [loading, setLoading] = useState(true);
//     useEffect(() => {
//     if (localStorage.getItem('token') !== null) {
//       window.location.replace('http://localhost:3000/dashboard');
//     } else {
//       setLoading(false);
//     }
//   }, []);
//   const onSubmit = e => {
//     e.preventDefault();
//     const user = {
//       email: email,
//       password: password
//     };
//     fetch('http://127.0.0.1:8000/api/v1/users/auth/login/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(user)
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.key) {
//           localStorage.clear();
//           localStorage.setItem('token', data.key);
//           window.location.replace('http://localhost:3000/dashboard');
//         } else {
//           setEmail('');
//           setPassword('');
//           localStorage.clear();
//           setErrors(true);
//         }
//       });
//   };
//   return (
//     <div className="text-center m-5-auto">
//       {loading===false&&<h2>LOGIN</h2>}
//       {errors===true&&<h2>Cannot Login with provided credentials</h2>}
//       {loading===false&&(
//       <form action="/home">
//         <p>
//           <label>Username or email address</label>
//           <br />
//           <input type="text" name="first_name" required />
//         </p>
//         <p>
//           <label>Password</label>
//           <Link to="/forget-password">
//             <label className="right-label">Forget password?</label>
//           </Link>
//           <br />
//           <input type="password" name="password" required />
//         </p>
//         <p>
//           <button id="sub_btn" type="submit" onClick={() => this.LoginRequest()}>
//             Login
//           </button>
//         </p>
//       </form>
//       )}
//     </div>
//   );
// };

// export default LogInPage;
