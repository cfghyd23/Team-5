
import React from 'react';

function Admindash() {
    function CardRow() {
        function Card({ imageSrc, cardTitle, progress }) {
            
    
            return (
              <div className="card" style={{ width: '18rem' }}>
                <img src={imageSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{cardTitle}</h5>
                  {/* Progress Bar */}
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${progress}%` }}
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {progress}%
          </div>
        </div>
        {/* End of Progress Bar */}
                  <br></br>
                  <button className='btn btn-primary'>More Details</button>
                </div>
              </div>
            );
          }
      return (
        <div className="row">
          <div className="col-md-4">
            <Card
              imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Sustainable_Development_Goal_01NoPoverty.svg/1200px-Sustainable_Development_Goal_01NoPoverty.svg.png"
              cardTitle="No Poverty"
               const progress = {75} 
            />
          </div>
          <div className="col-md-4">
            <Card
              imageSrc="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-02.jpg"
              cardTitle="Zero Hunger"
              const progress = {25}
            />
          </div>
          <div className="col-md-4">
            <Card
              imageSrc="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-03-1024x1024.png"
              cardTitle="Good Health and Well Being"
              const progress = {50}
            />
          </div>
        </div>
      );
    }
    return (
        <div>
        <CardRow />
        </div>
      );
}

export default Admindash;