import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import classes from "./Projects.module.css";
import PasswordGenerator from "../../../Assets/ImageLinks/PasswordGenerator.JPG";
import NoteTaker from "../../../Assets/ImageLinks/NoteTaker.JPG";
import ReadMe from "../../../Assets/ImageLinks/ReadMe.JPG";
import EmployeeTracker from "../../../Assets/ImageLinks/EmployeeTracker.JPG";
import SocialNetworkApi from "../../../Assets/ImageLinks/SocialNetworkApi.JPG";

const Projects = (props) => {
  const [vandyProjects] = useState([
    {
      id: "vandy1",
      title: "Password Generator",
      link: (
        <a href="https://rayflaherty.github.io/CreatePassword1/">
          <img
            src={PasswordGenerator}
            className={classes.linkStyle}
            alt="Password Generator page"
          ></img>
        </a>
      ),
      gitHub: (
        <a
          href="https://github.com/RayFlaherty/CreatePassword1.git"
          className={classes.linkStyle}
        >
          GitHub Repo
        </a>
      ),
      desc: "Basic Javascript Fundamentals",
    },
    {
      id: "vandy2",
      title: "Note Taker",
      link: (
        <a href="https://super-cool-notetaker.herokuapp.com/">
          <img
            src={NoteTaker}
            className={classes.linkStyle}
            alt="Note Taker Screenshot"
          ></img>
        </a>
      ),
      gitHub: (
        <a
          href="https://github.com/RayFlaherty/rays-note-taker.git"
          className={classes.linkStyle}
        >
          GitHub Repo
        </a>
      ),
      desc: "API Usage",
    },
    {
      id: "vandy3",
      title: "Readme Generator",
      link: (
        <a href="https://www.youtube.com/watch?v=Of-wrC4q4dg">
          <img
            src={ReadMe}
            className={classes.linkStyle}
            alt="screenshot of youtube channel"
          ></img>
        </a>
      ),
      gitHub: (
        <a
          href="https://github.com/RayFlaherty/Rays-portfolio-generator.git"
          className={classes.linkStyle}
        >
          GitHub Repo
        </a>
      ),
      desc: "Building with Node.Js",
    },
    {
      id: "Vandy4",
      title: "Employee Tracking System",
      link: (
        <a href="https://www.youtube.com/embed/yGCz37IREYg">
          <img
            src={EmployeeTracker}
            className={classes.linkStyle}
            alt="Screenshot of youtube Video"
          ></img>
        </a>
      ),
      gitHub: (
        <a href="https://github.com/RayFlaherty/Rays-employee-tracking-system.git">
          GitHub Repo
        </a>
      ),
      desc: "SQL Database Build",
    },
    {
      id: "Vandy5",
      title: "Social Networking API",
      link: (
        <a href="https://www.youtube.com/watch?v=DoP3Y4YvhhA">
          <img src={SocialNetworkApi} alt="screenshot of youtube" className={classes.linkStyle}></img>
        </a>
      ),
      gitHub: (
        <a href="https://github.com/RayFlaherty/Back_end_api.git">
          GitHub Repo
        </a>
      ),
      desc: "No Sql Database Build"
    },
  ]);

  return (
    <div>
      <Card className={classes.layout}>
        <div>
          <h2>Deployed Projects</h2>
        </div>
        <div>
          <p>
            Please feel free to enjoy the links to completed and deployed
            projects. They display a wide range of skills I developed in my
            training. Links to the GitHub Repos are also available for further
            scrutiny. Enjoy!
          </p>
        </div>
        <div>
          <h2>Vanderbilt Projects</h2>
          <ul id={vandyProjects.id} className={classes.cardRow}>
            {vandyProjects.map((vandyProjects) => (
              <li className={classes.liLayout}>
                <Card>
                  <div className={classes.cardStyle}>
                    <h4>{vandyProjects.title}</h4>
                    <p className={classes.p2}>{vandyProjects.desc}</p>
                    <div>{vandyProjects.link}</div>
                    <div>{vandyProjects.gitHub}</div>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </div>
        <footer>
          <Button>Back To Top</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Projects;
