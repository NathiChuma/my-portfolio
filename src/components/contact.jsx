import React from "react";
import imageOverlay from "../img/earth.jpg";

class Contact extends React.Component {
  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(" + imageOverlay + ")" }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div id="contact" className="box-shadow-full">
              <div className="title-box-2 pt-4 pt-md-0">
                <h5 className="title-left">Get in Touch</h5>
              </div>
              <div className="more-info" style={{textAlign: "center"}}>
                <p className="lead">
                  Whether you want to get in touch, talk about a project
                  collaboration, or just say hi, I'd love to hear from
                  you.
                  <br />
                  You can find me on these platforms.
                </p>
              </div>
              <div className="socials" style={{textAlign: "center"}}>
                <ul>
                  <li>
                    <a
                      href="https://github.com/NuttyChuma"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="ico-circle">
                        <i className="ion-social-github"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/nkosinathi-chuma-395690246/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="ico-circle">
                        <i className="ion-social-linkedin"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/nutty_chuma/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="ico-circle">
                        <i className="ion-social-instagram"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/nutty.chuma/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="ico-circle">
                        <i className="ion-social-facebook"></i>
                      </span>
                    </a>
                  </li>
                  {/*<li>
                    <a
                      href="https://wa.me/27768276101"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="ico-circle">
                        <i className="ion-social-whatsapp"></i>
                      </span>
                    </a>
                  </li>*/}
                </ul>
              </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;