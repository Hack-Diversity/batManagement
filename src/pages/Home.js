import React, {Component} from 'react';
import Container from "react-bootstrap/Container";

function Home(){
    return(
      <div>
        <div className="home-container">
          <div className="home-text-container">
            <p className="home-text">
              Make a website to improve your business
            </p>
          </div>
          <div className="home-image-container">
            <img
              src="https://purepng.com/public/uploads/large/purepng.com-running-womenrunnerjoggingjumpingrunning-women-1421526963993vkpyk.png"
              height="100%"
              width="100%"
            />
          </div>
          </div>
          <div className="homebtn-getstarted-container">
          <button className="homebtn-getstarted">Get Started</button>
          </div>
        </div>

    )
}

export default Home;
