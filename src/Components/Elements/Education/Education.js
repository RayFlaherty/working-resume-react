import React from "react";
import Card from "../../UI/Card";
import "./Education.css";
import VandyCert from "../../../Assets/Certificates/Vandy_Cert.JPG";
const Education = () => {
  return (
    <Card>
      <div className="h1Header">
        <h2 className="h1Text"> Work History and Education </h2>
        <div >
          <div className="certDisplay">
            <Card className="certStyle smallCertStyleWidth">
              <h3>Graduate of Vanderbilt</h3>
              <p> Enrolled September of 2021</p>
              <p> Completed Program March 2022</p>
            </Card>
            <Card className="certStyle right">
              <img src={VandyCert} className="largeCertStyleWidth"></img>
            </Card>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Education;
