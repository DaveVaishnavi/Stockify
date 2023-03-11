import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useRegisterUserMutation } from "../services/userAuthApi";
import { TextField, FormControlLabel, Checkbox, Button, Box, Alert, Typography } from '@mui/material';
import { storeToken } from "../services/LocalStorageService";

const Registration = () => {
  const [server_error, setServerError] = useState({})
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      password2: data.get('password2'),
      tc: data.get('tc'),
    }
    const res = await registerUser(actualData)
    if (res.error) {
      console.log(typeof (res.error.data.errors))
      console.log(res.error.data.errors)
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      console.log(typeof (res.data))
      console.log(res.data)
      storeToken(res.data.token)
      navigate('/LogIn')
    }
  }

  return <>
    {/* {server_error.non_field_errors ? console.log(server_error.non_field_errors[0]) : ""}
    {server_error.name ? console.log(server_error.name[0]) : ""}
    {server_error.email ? console.log(server_error.email[0]) : ""}
    {server_error.password ? console.log(server_error.password[0]) : ""}
    {server_error.password2 ? console.log(server_error.password2[0]) : ""}
    {server_error.tc ? console.log(server_error.tc[0]) : ""} */}
    <Box component='form' noValidate sx={{ mt: 1 }} id='registration-form' onSubmit={handleSubmit}>
      <TextField margin='normal' required fullWidth id='name' name='name' label='Name' />
      {/* error indication */}
      {server_error.name ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.name[0]}</Typography> : ""}
      <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
      {/* error indication */}
      {server_error.email ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</Typography> : ""}
      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
      {/* error indication */}
      {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password[0]}</Typography> : ""}
      <TextField margin='normal' required fullWidth id='password2' name='password2' label='Confirm Password' type='password' />
      {/* error indication */}
      {server_error.password2 ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password2[0]}</Typography> : ""}
      <FormControlLabel control={<Checkbox value={true} color="primary" name="tc" id="tc" />} label="I agree to term and condition." />
      {/* error indication */}
      {server_error.tc ? <span style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.tc[0]}</span> : ""}
      <Box textAlign='center'>
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Join</Button>
      </Box>
      {/* error indication password doesn't match */}
      {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
    </Box>
  </>;
};

export default Registration;

// const Register = () => {
// const [email, setEmail] = useState('');
// const [password1, setPassword1] = useState('');
// const [password2, setPassword2] = useState('');
// const [errors, setErrors] = useState(false);
// const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     if (localStorage.getItem('token') !== null) {
//       window.location.replace('http://localhost:3000/dashboard');
//     } else {
//       setLoading(false);
//     }
//   }, []);
//   const [registerUser,{ isLoading }] = useRegisterUserMutation()
//   const onSubmit = async (e) => {
//     e.preventDefault();

//     const user = {
//       email: email,
//       password1: password1,
//       password2: password2
//     };
//     const res = await registerUser(user)
//     console.log(res)
//     fetch('http://127.0.0.1:8000/api/v1/users/auth/register/', {
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
//           setPassword1('');
//           setPassword2('');
//           localStorage.clear();
//           setErrors(true);
//         }
//       });
//   };
//   return (
//   <>
//     <div className="text-center m-5-auto">
//       {isLoading===false&&<h2>CREATE AN ACCOUNT</h2>}
//       {errors===true&&<h2>Cannot signup with provided credentials</h2>}
//       <form action="/home">
//         <p>
//           <label>Email address</label>
//           <br />
//           <input type="text" value={email} name="email address" onChange={e=>setEmail(e.target.value)} required />
//         </p>
//         <p>
//           <label>Password</label>
//           <br />
//           <input type="password" value={password1} name="password" onChange={e=>setPassword1(e.target.value)} required />
//         </p>
//         <p>
//           <label>Confirm Password</label>
//           <br />
//           <input type="password" name="repeat-password" value={password2} onChange={e=>setPassword2(e.target.value)} required />
//         </p>
//         <p>
//           <button id="sub_btn" type="submit">
//             REGISTER
//           </button>
//         </p>
//       </form>
//       <footer>
//         <p>
//           Have already an account? <Link to="/LogIn">Login here</Link>.
//         </p>
//         <p>
//           <Link to="/">Back to Homepage</Link>.
//         </p>
//       </footer>
//     </div>
//     </>
//   );
// };
