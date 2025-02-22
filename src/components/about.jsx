import React from "react";
import aboutImage from "../img/Ghost.JPG";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about_me: [
        {
          id: "first-p-about",
          content:
            "I'm a " + this.calculateAge("01/17/2002", new Date()) + " year old full-stack developer passionate about building intuitive and user-friendly mobile and web applications. With experience in React, OpenEdge, Flutter, and Firebase, I enjoy crafting seamless digital experiences that make a real impact. Always eager to learn and explore new technologies, I thrive on problem-solving and bringing ideas to life through code."
        },
        {
          id: "second-p-about",
          content:
            "Beyond coding, I enjoy diving into the mysteries and the fundamentals of the universe. I'm always eager to learn, explore new ideas, and challenge myself both in tech and beyond."
        }
      ]
    };
  }

  calculateAge (birthDate, otherDate) {
    birthDate = new Date(birthDate);
    otherDate = new Date(otherDate);

    var years = (otherDate.getFullYear() - birthDate.getFullYear());

    if (otherDate.getMonth() < birthDate.getMonth() ||
       (otherDate.getMonth() === birthDate.getMonth() && otherDate.getDate() < birthDate.getDate())) {
        years--;
    }

    return years;
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                        </div>
                        {this.state.about_me.map(content => {
                          return (
                            <p className="lead" key={content.id}>
                              {content.content}
                            </p>
                          );
                        })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                          <img
                            src={aboutImage}
                            className="img-fluid rounded b-shadow-a"
                            style={{maxWidth: "100%", alignContent: "center"}}
                            alt=""
                          />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
