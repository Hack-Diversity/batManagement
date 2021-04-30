import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

class Home extends Component {
  render(){
    return(
      <div className="home-container-top">
        <div className="home-container">
          <div className="home-text-container">
            <p className="home-text">
              Make a website to improve your business
            </p>
            <div className="homebtn-getstarted-container">
              <Button
                variant="outline-light"
                className="homebtn-getstarted bat_btn_general"
                href={"/CreateAccount"}
                >
                Get Started
              </Button>
            </div>
          </div>
          <div className="home-image-container">
            <img
              src="https://purepng.com/public/uploads/large/purepng.com-running-womenrunnerjoggingjumpingrunning-women-1421526963993vkpyk.png"
              height="100%"
              width="100%"
              alt="female runner"
            />
          </div>
        </div>
      </div>
    )};
};

export default Home;
