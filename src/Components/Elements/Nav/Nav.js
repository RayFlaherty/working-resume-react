import React from "react";
import "./Nav.css";

const Nav = (props) => {
  const { navDisplay = [], setCurrentNavDisplay, currentNavDisplay } = props;

  return (
    <div className="Nav">
      <h1 className="Nav h1">Raymond Flaherty</h1>

      <nav className="navPosition">
        <ul className="navRow">
          <li className="navText">
            <a data-testid="e1" href="#e1">About Me</a>
          </li>
          <li className="navText">
            <a href="#workingProjects">Working Projects</a>
          </li>
          <li className="navText">
            <a href="#workHistory"> Work History and Education</a>
          </li>
          <li className="navText">
            <span>Contact Me</span>
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
      </nav>

      {/* <div className="navPosition Width">
            {props.items.map((props) => (
              <div className="items">{props.title}</div>
            ))}
          </div> */}
    </div>
  );
};

export default Nav;
