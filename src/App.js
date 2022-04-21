import Nav from "./Components/Elements/Nav/Nav";
import "./App.css";
import DisplayWindow from "./Components/Elements/Gallery/Gallery";
import AboutMe from "./Components/Elements/AboutMe/AboutMe";
import Gallery from "./Components/Elements/Gallery/Gallery";

function App() {
  const navDisplay = [
    {
      id: "e1",
      title: "About Me",
    },
    {
      id: "e2",
      title: "Working Projects",
    },
    {
      id: "e3",
      title: "Work History" 
    },
    {
      id:"e4",
      title: "Gallery",
    },
  ];
  return (
    <div>
      <Nav items= {navDisplay}></Nav>
      <Gallery/>
      <AboutMe/>
    </div>
  );
}

export default App;
