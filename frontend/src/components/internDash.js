import React from 'react'
import '../css/internDash.css'
import userImage from '../images/user.jpg'; // Replace with your user image path


function InternDash() {

        const user = {
          name: 'John Doe',
          email: 'johndoe@example.com',
          cause: 'protection of the environment.',
        };

        const ProgressBar = ({ percentage }) => {
            return (
              <div className="progress-bar">
                <div className="progress-bar__fill" style={{ width: `${percentage}%` }}></div>
              </div>
            );
          };

          const progressPercentage = 75;

  return (
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
        <h3>NOTIFICATIONS</h3>
        <ul>
          <li>Message 1</li>
          <li>Message 2</li>
          <li>Message 3</li>
        </ul>
        </div>
        </div>
    </div>
  )
}


export default InternDash