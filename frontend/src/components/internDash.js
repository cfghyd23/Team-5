import React, { useEffect, useState } from 'react';
import '../css/internDash.css'
import userImage from '../images/user.jpg'; // Replace with your user image path
import Axios from 'axios'


function InternDash() {

    const [data, setData] = useState([]);
   
    // useEffect(() => {
    //   fetchData();
    // }, []);
  
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch('http://localhost:5000/data');
    //     const jsonData = await response.json();
    //     setData(jsonData);
    //   } catch (error) {
    //     console.log('Error fetching data:', error);
    //   }
    // };
    useEffect(()=>{
        
        Axios.get("http://localhost:5000/data").then((response) => {
            console.log("hi",response.data)
          setData(response.data)
        })
      }, [])

        const user = {
          name: 'John Doe',
          email: 'nishanthsvamsi@gmail.com',
          cause: 'protection of the environment.',
        };

        const ProgressBar = ({ percentage }) => {
            return (
              <div className="progress-bar">
                <div className="progress-bar__fill" style={{ width: `${percentage}%` }}></div>
              </div>
            );
          };
          // console.log(data[0].threshold)
          const progressPercentage = 80
          const userData = {
            "email":user.email,
            "progress": progressPercentage
        }

          Axios.post('http://localhost:5000/submit',userData).then((response)=>{
            console.log(response)
          })

  return (
    <div>
         <div className='box'>
        <div  className="user-profile">
            <div className="user-image">
                <img src={userImage} alt="User" />
            </div>

            <h2>USER PROFILE</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Cause:</strong> {user.cause}</p>

            <h3>Progress</h3>
            <ProgressBar percentage={progressPercentage} />

            </div>
        <div>
        <div className="notification-panel">
        <h3>ANNOUNCEMENTS</h3>
        <ul>
          <li>We are thrilled to announce an urgent volunteer meeting on [Date] at [Time]. Your presence is crucial as we will discuss new initiatives and upcoming projects that require your valuable contribution. </li>
        </ul>
        </div>
        </div>
    </div>
    </div>
  )
}


export default InternDash