
import React from "react";
import "../css/Homepage.css";
const HomePage = () => {


 

  return (
    <div className="home-container">
      
      <div className="home-header">
        <h1>Our Treatments</h1>
       
      <div className="topnav">
        <a href="#">
          <li className="menu1">Home</li>
        </a>
        <a href="Treatments">
          <li className="menu1">Treatments</li>
        </a>
        <a href="#">
          <li className="menu1">Contact</li>
        </a>
        <a href="#">
          <li className="menu1">About</li>
        </a>
        {/* Add your other menu items here */}
      </div>
   </div>
    </div>
  );
};

export default HomePage;
