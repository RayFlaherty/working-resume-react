import Nav from "./Components/Elements/Nav";
import "./App.css";
import DisplayWindow from "./Components/Elements/DisplayWindow/DisplayWindow";
import AboutMe from "./Components/Elements/AboutMe/AboutMe";

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
      <DisplayWindow></DisplayWindow>
      <AboutMe/>
    </div>
  );
}

export default App;
