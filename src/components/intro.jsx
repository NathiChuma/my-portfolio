import React from "react";
import "./stars.scss";
import {ReactTyped} from "react-typed";

//import backgroundImage from "../img/Ghost.JPG";
import backgroundImage from "../img/NathiWB.jpg";

//https://t4.ftcdn.net/jpg/10/16/77/45/240_F_1016774590_USkqd3QYi73RJzIgAEeNg1kWIIG41Rz9.jpg
//<div id="home" className="intro route bg-image background">
class Intro extends React.Component {
  render() {
    return (
       <div id="home" className="intro route bg-image" style={{backgroundImage: "url(" + backgroundImage + ")"}}>
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I am Nkosinath Chuma</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <ReactTyped
                    strings={[
                      "Front End Developer",
                      "Back End Developer",
                      "Software Engineer",
                      "Chill Guy"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
