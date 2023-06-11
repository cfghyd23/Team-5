import React from 'react';
import "../css/Home.css"
import {useNavigate} from 'react-router-dom'

const Home= () => {
    const navigate = useNavigate();
  return (
    <div>
      <img src="https://static.wixstatic.com/media/2cdbfc_92326ae264c547afb8a8ff8428cf3e5b~mv2.png/v1/fill/w_1469,h_825,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20(1).png"/>
      <div className="message-box">
       
        <p></p>
        <div className="buttons-con">
          <div className="action-link-wrap">
          <button onClick={() => {navigate('/signup')}} type="submit" className="btn btn-primary">SignUp</button>
          <button onClick={() => {navigate('/login')}} type="submit" className="btn btn-primary">SignIn</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;