import React from "react";
import classes from "./Nav.module.css";
import Card from "../../UI/Card/Card";
import AboutMe from "../AboutMe/AboutMe";

const Nav = (props) => {
  const { navDisplay = [], setCurrentNavDisplay, currentNavDisplay } = props;
  const aboutMeNav = props => {
    return <AboutMe/>
  }

  return (
    <Card>
      <div className={classes.navHUD}>
        <div>
          <h1 className={classes.navHeader}>Raymond</h1>
          <h1 className={classes.navHeader}>Flaherty</h1>
        </div>
      </div>
      <div className={classes.navPosition}>
        <ul className={classes.navRow}>
          <li className={classes.navText}>
            <a href="#e1" onClick={aboutMeNav}>
              About Me
            </a>
          </li>
          <li className={classes.navText}>
            <a href="#workingProjects">Work History and Education</a>
          </li>
          <li className={classes.navText}>
            <a href="#workHistory"> Projects </a>
          </li>
          <li className={classes.navText}>
            <a href="#contact">Contact Me</a>
          </li>
          {navDisplay.map((navDisplay) => (
            <li key={navDisplay.id}>
              <span
                onClick={() => {
                  setCurrentNavDisplay(currentNavDisplay);
                }}
              ></span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default Nav;
