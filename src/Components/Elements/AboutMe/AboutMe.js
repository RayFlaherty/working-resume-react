import React from "react";
import Card from "../../UI/Card/Card";
import "./AboutMe.css";
import Button from "../../UI/Button/Button";

const AboutMe = () => {
  return (
    <Card>
      <div className="header h1Text">
        <h2> ABOUT ME </h2>
        <Card>
        <div className="textAlign">
          <h3>Hello!</h3>
          <p>
            My name is Raymond Flaherty, I am a single father of two amazing
            boys and am looking for the next chapter in my professional life. I
            am a former Marine and Police Officer. I spent 18 years in public
            service and am seeking an enjoyable carrier in problem solving
            through web-development. Prior to enrolling into Vanderbilt
            University’s Full Stack Web Development Program, I had little to no
            experience with either the front or back end of web development.
            With my lack of experience, I was a bit apprehensive in enrolling in
            the program, however I have never met a challenge I was not able to
            complete. Through the six-month course I learned something about
            myself, I love coding. I enjoy working in small teams, developing
            project. It is always extremely satisfying seeing my key strokes
            manifest into a working model on my screen. I am a hard-working,
            team-minded, professional who is driven to continue to pursue more
            education. As I type this short bio, I enrolled into another course
            in REACT. My education is never complete. Please take the time and
            enjoy the layout of my portfolio. You will find a list of languages
            and programs I am familiar with as well as links to some GitHub
            repos. Thank you for the opportunity.
          </p>
        </div>
        </Card>
        <Button>Back To Top</Button>
      </div>
    </Card>
  );
};

export default AboutMe;
