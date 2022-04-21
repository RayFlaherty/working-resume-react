import Card from "../../UI/Card";
import "./Nav.css";

const Nav = (props) => {
  return (
    <div className="Nav">
      
        <h1 className="Nav h1">Raymond Flaherty</h1>
    
    
        
          <div className="navPosition Width">
            {props.items.map((props) => (
              <div className="items">{props.title}</div>
            ))}
          </div>
      
      </div>

  );
};

export default Nav;
