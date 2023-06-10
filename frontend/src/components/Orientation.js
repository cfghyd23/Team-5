import React from "react";



function Orientation() {

    const handleFetchLink = ()=>{

    }
    return ( 
        
            <div className="card mx-auto mt-5 mb-4 orient" style={{ width: "75%" }}>
      <div className="card-body">
        <h5 className="card-title text-center">Welcome User!</h5>
        <p className="card-text">
          Welcome to Marpu Community! (SDGs)!
          <br />
          <br />
          We are thrilled to have you on board as an intern, joining us in our mission to create a more sustainable and equitable world. Your presence here is a testament to your commitment to making a positive impact on the planet and the lives of people everywhere.
          <br />
          <br />
          At our organization, we believe that sustainable development is not just a concept, but a path towards a better future for all. Our team is dedicated to implementing the 17 SDGs established by the United Nations, focusing on areas such as eradicating poverty, ensuring quality education, achieving gender equality, and combating climate change, among others.
          <br />
          <br />
          As an intern, you will have the opportunity to work alongside passionate individuals who share a common vision for a more sustainable world. Your creativity, fresh perspectives, and dedication will be instrumental in driving our initiatives forward.
        </p>
        <button className="btn btn-primary" onClick={handleFetchLink}>
          Join meet!
        </button>
      </div>
    </div>
        
       
        
     );
}

export default Orientation;