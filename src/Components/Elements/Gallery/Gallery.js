import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import "./Gallery.css";
import photo from "../../../Assets/Images/Headshot.JPG";

const Gallery = () => {
  const currentPhoto = {
    name: "Headshot",
    description: "Photo of me working on a retaining wall.",
  };

  const [skills] = useState([
    { id: "s1", skill: "HTML" },
    { id: "s2", skill: "CSS" },
    { id: "s3", skill: "Javascript"},
    { id: "s4", skill: "GIT BASH"},
    { id: "s5", skill: "Web APIs (Third Party and Server Side)"},
    { id: "s6", skill: "NODE.JS"},
    { id: "s7", skill: "Object Oriented Programming"},
    { id: "s8", skill: "Express.JS"},
    { id: "s9", skill: "SQL"},
    { id: "s10", skill: "Object Oriented Mapping"},
    { id: "s11", skill: "Model View Controllers"},
    { id: "s12", skill: "No SQL databases"},
    { id: "s13", skill: "Progressive Web Applications"},
    { id: "s14", skill: "REACT"},
    { id: "s15", skill: "MONGO DB, INSOMNIA, AND HEROKU"},
    { id: "s16", skill: "M.E.R.N. Projects (Mongo, Express, React, and Node)"},

  ]);

  return (
    <Card>
      <Card className="displayWindow-body">
        <img
          src={photo}
          alt={currentPhoto.description}
          className="img-display"
        />
      </Card>
      <Card>
        <ul>
          {skills.map((skills) => (
            <li key={skills.id}>{skills.skill}</li>
          ))}
        </ul>
      </Card>
    </Card>
  );
};

export default Gallery;
