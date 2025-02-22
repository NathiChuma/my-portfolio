import React from "react";

class Skills extends React.Component {

  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", percentage: "60%", value: "60" },
        { id: "CSS3_skill", content: "CSS3", percentage: "55%", value: "55" },
        { id: "JavaScript_skill", content: "JavaScript", percentage: "85%", value: "85" },
        { id: "PHP_skill", content: "PHP", percentage: "50%", value: "50" },
        { id: "ReactJS_skill", content: "ReactJS", percentage: "66%", value: "66" },
        { id: "Python_skill", content: "Python", percentage: "75%", value: "75" },
        { id: "Openedge_skill", content: "OpenEdge", percentage: "90%", value: "90" },
        { id: "Dart_skill", content: "Dart", percentage: "80%", value: "80" },
        { id: "Java_skill", content: "Java", percentage: "85%", value: "85" },
        { id: "Flutter_skill", content: "Flutter", percentage: "75%", value: "75" },
      ]
    };
  }

  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Skills</h3>
                <p className="subtitle-a">
                  These here are my skills.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="skill-mf">
            {this.state.skills.map(skill => {
              return (
                <React.Fragment key={skill.id}>
                  <span>{skill.content}</span>{" "}
                  <span className="pull-right">
                    {skill.percentage}
                  </span>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: skill.percentage }}
                      aria-valuenow={skill.value}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
