import React from "react";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import classes from "./Projects.module.css"
import PasswordGenerator from "../../../Assets/ImageLinks/PasswordGenerator.JPG"

const Projects = (props) => {
  return (
    <div>
      <Card className= {classes.layout}>
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
        <div className={classes.cardRow}>
            <Card className={classes.cardStyle}>
                <div className={classes.layout}>
                    <h3>Password Generator</h3>
                    <a href="https://rayflaherty.github.io/CreatePassword1/"><img src={PasswordGenerator} className={classes.linkStyle}></img></a>
                </div>
            </Card>
            <Card className={classes.cardStyle}></Card>
            <Card className={classes.cardStyle}></Card>
            <Card className={classes.cardStyle}></Card>
        </div>
        <footer>
          <Button>Back To Top</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Projects;
