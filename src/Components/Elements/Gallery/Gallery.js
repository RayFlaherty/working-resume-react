import Card from "../../UI/Card";
import "./Gallery.css";
import photo from "../../../Assets/Images/Headshot.JPG"

const Gallery = () => {
  const currentPhoto = {
    name: "Headshot",
    description: "Photo of me working on a retaining wall.",
  };
  return (
    <Card>
      <div className="displayWindow-body">
        <h1>{currentPhoto.name}</h1>
        <p>{currentPhoto.description}</p>
        <div>
          <img src={photo}
          alt ={currentPhoto.description}
          className="img-display"/>
        </div>
      </div>
    </Card>
  );
};

export default Gallery;
