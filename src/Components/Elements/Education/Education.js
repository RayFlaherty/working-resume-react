import React from "react";
import Card from "../../UI/Card/Card";
import "./Education.css";
import VandyCert from "../../../Assets/Certificates/Vandy_Cert.JPG";
import PostCert from "../../../Assets/Certificates/Post_Cert.JPG";
import Button from "../../UI/Button/Button";
const Education = () => {
  return (
    <Card>
      <div className="h1Header h1Text">
        <h2> Work History and Education </h2>
        <div>
          <div className="certDisplay">
            <Card className="certStyle smallCertStyleWidth">
              <h3>Graduate of Vanderbilt</h3>
              <h5> Enrolled September of 2021</h5>
              <h5> Completed Program March 2022</h5>
            </Card>
            <Card className="certStyle">
              <img
                src={VandyCert}
                className="largeCertStyleWidth"
                alt="Vanderbilt Certificate of Completion"
              ></img>
            </Card>
          </div>
          <div className="certDisplay">
            <Card className="certStyle largeCertStyleWidth">
              <h3>Completion Expected in May 2022</h3>
            </Card>
            <Card className="certStyle certStyle smallCertStyleWidth">
              <h3>Complete React Course</h3>
              <h5> Course Provided by Udemy </h5>
            </Card>
          </div>
          <div className="certDisplay">
            <Card className="certStyle smallCertStyleWidth">
              <h3>Metropolitan Nashville Police Department</h3>
              <h3>Police Academy</h3>
              <h5> Enrolled March of 2011</h5>
              <h5> Completed Program September 2011</h5>
            </Card>
            <Card className="certStyle">
              <img
                src={PostCert}
                className="largeCertStyleWidth"
                alt="Police Academy Post Certification"
              ></img>
            </Card>
          </div>
          <Button>Back To Top</Button>
        </div>
      </div>
    </Card>
  );
};

export default Education;
