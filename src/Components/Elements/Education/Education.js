import React from "react";
import Card from "../../UI/Card";
import "./Education.css";
import VandyCert from "../../../Assets/Certificates/Vandy_Cert.JPG";
const Education = () => {
  return (
    <Card>
      <div className="h1Header">
        <h2 className="h1Text"> Work History and Education </h2>
        <div>
          <div className="certDisplay">
            <Card className="certStyle smallCertStyleWidth">
              <h3>Graduate of Vanderbilt</h3>
              <p> Enrolled September of 2021</p>
              <p> Completed Program March 2022</p>
            </Card>
            <Card className="certStyle">
              <img src={VandyCert} className="largeCertStyleWidth"></img>
            </Card>
          </div>
          <div className="certDisplay">
            <Card className="certStyle largeCertStyleWidth">
              <h3>Completion Expected in May 2022</h3>
            </Card>
            <Card className="certStyle certStyle smallCertStyleWidth">
                <h3>Complete React Course</h3>
                <p> Course Provided by Udemy </p>
            </Card>
          </div>
          <div className="certDisplay">
          <Card className="certStyle smallCertStyleWidth">
              <h3>Metropolitan Nashville Police Department Academy</h3>
              <p> Enrolled March of 2011</p>
              <p> Completed Program September 2011</p>
            </Card>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Education;
