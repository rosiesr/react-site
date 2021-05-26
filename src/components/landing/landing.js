import React from "react";
import { Button } from "reactstrap";
import "./landing.scss";

export const Landing =  ({scrollTo}) => {
    return (
        <div className="home-container">
          <div className="landing-container">
              <div
                className="perspective-touch-container"></div>
                <div className="landing-content-container" >
                    <div className="landing-content">
                        <h1 className="title">Rosie Rothschild</h1>
                        <h1 className="subtitle">★★★★★★★★</h1>
                        <Button style={buttonStyle} onClick={() => scrollTo("about", -50)}>About</Button>
                        <Button style={buttonStyle} onClick={() => scrollTo("experience", -50)}>Experience</Button>
                        <Button style={buttonStyle} onClick={() => scrollTo("projects", -50)}>Projects</Button>
                    </div>
                </div>
          </div>
        </div>
    )

}

export default Landing;

const buttonStyle = { marginRight: "10px"}