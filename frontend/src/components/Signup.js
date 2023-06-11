import React, { useState} from 'react'
import {useNavigate} from 'react-router-dom'
import '../css/Signup.css'
import Axios from 'axios'

const Signup= () =>{

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const handleDobChange = (event) => {
      setDob(event.target.value);
    };

    let validationErrors = {};
    if (!username.trim()) {
      validationErrors.username = <h8 style={{ color: 'red' }}>*username should not be empty</h8>;
    }
    if (!address.trim()) {
      validationErrors.address = <h8 style={{ color: 'red' }}>*Address should not be empty</h8>;
    }

    if (!email.trim()) {
      validationErrors.email = <h8 style={{ color: 'red' }}>*Email is required</h8>;
    } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(email)) {
      validationErrors.email = <h8 style={{ color: 'red' }}>*Email is invalid</h8>;
    }

    if (!dob) {
      validationErrors.dob = <h8 style={{ color: 'red' }}>*Date of birth is required</h8>;
    } 

    if (!password) {
      validationErrors.password = <h8 style={{ color: 'red' }}>*Password is required</h8>;
    } else if (password.length < 6) {
      validationErrors.password = <h8 style={{ color: 'red' }}>*Password should be at least 6 characters long</h8>;
    }

      if(!mobile)
    {
      validationErrors.mobile = <h8 style={{ color: 'red' }}>*Mobile number is required</h8>;
    }else if (mobile.length < 10 || mobile.length > 10) {
      validationErrors.password = <h8 style={{ color: 'red' }}>*Mobile should have only 10 digits</h8>;
    }
    if (!confirmPassword) {
      validationErrors.confirmPassword = <h8 style={{ color: 'red' }}>*Confirm Password is required</h8>;
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = <h8 style={{ color: 'red' }}>*Passwords do not match</h8>;
    }

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, submit data or make API call here
      // ...
    } else {
      setErrors(validationErrors);
    }
  };

  const handlesignup = () => {
    Axios.post("http://localhost:5000/intern/register", {
      username: username, 
      email: email,
      dob:dob,
      mobile:mobile,
      address: address,
      password: password,
      confirmPassword: confirmPassword,
  }).then((response) => {
    console.log(response.data.message);
    navigate('/login')
  });
  };
  
    return (
      <div className='main'>
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>Username</label>
          <input
           type="text"
           name="username"
           value={username}
           className="form-control"
           onChange={(e) => setUsername(e.target.value)}
           placeholder="Name"
            
          />
         {errors.username && <span>{errors.username}</span>}
        </div>

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
          <label>Date of birth</label>
          <input
           type="date"
           value={dob}
           className="form-control"
           placeholder=""
           onChange={(e) => setDob(e.target.value)}
          />
          {errors.dob && <span>{errors.dob}</span>}
        </div>

        <div className="mb-3">
          <label>Mobile no</label>
          <input
           type="mobile"
           name="mobile"
           value={mobile}
           className="form-control"
           onChange={(e) => setMobile(e.target.value)}
           placeholder="mobile"
          />
         {errors.mobile && <span>{errors.mobile}</span>}
        </div>
        
        <div className="mb-3">
          <label>Address</label>
          <input
           type="text"
           name="address"
           value={address}
           className="form-control"
           onChange={(e) => setAddress(e.target.value)}
           placeholder="House Address"
            
          />
          {errors.address && <span>{errors.address}</span>}
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

        {/* <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            className="form-control"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div> */}

        <div className="d-grid">
          <button onClick={handlesignup} type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <button onClick={() => {navigate('/')}}>sign in?</button>
        </p>
      </form>
      </div>
    )
  }

  export default Signup;