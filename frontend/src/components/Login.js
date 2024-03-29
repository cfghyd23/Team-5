import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import "../css/Login.css"
import Axios from 'axios'
const Login= () =>{

  const navigate = useNavigate();
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  

  function Handlesuccess (response) {
    navigate('/internDash')

  }
  const handleSubmit = (event) => {
    event.preventDefault();

    let validationErrors = {};
    if (!email.trim()) {
      validationErrors.email = <h8 style={{ color: 'red' }}>*Email is required</h8>;
    } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(email)) {
      validationErrors.email = <h8 style={{ color: 'red' }}>*Email is incorrect</h8>;
    }

    if (!password) {
      validationErrors.password = <h8 style={{ color: 'red' }}>*Password is required</h8>;
    } else if (password.length < 6) {
      validationErrors.password = <h8 style={{ color: 'red' }}>*Password is incorrect</h8>;
    }

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, submit data or make API call here
      // ...
    } else {
      setErrors(validationErrors);
    }
  };

  const handleLogin = () => {
    Axios.post("http://localhost:5000/intern/login", { 
      email: email,
      password: password,
  }).then((response) => {
    console.log(response)
    if(response.data.message==="success"){
       Handlesuccess(response);
    }
  });
  };

    return (
      <div className='main'>
      <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
             type="email"
             name="email"
             value={email}
             className="form-control"
             onChange={(e) => setEmail(e.target.value)}
             placeholder="Email"
          />
           {errors.email && <span>{errors.email}</span>}
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
           {errors.password && <span>{errors.password}</span>}
        </div>

        <div className="d-grid">
        <button onClick= {handleLogin} type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
        <p className="forgot-password text-right">
        Create Account <button onClick={() => {navigate('/signup')}}> signup</button>
        </p>
      </form>
      </div>
    )
  }
  export default Login;
