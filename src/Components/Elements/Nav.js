import Card from "../UI/Card";

const Nav = (props) => {
  return (
    <Card>
      <div>
        <h1>Raymond Flaherty</h1>
        {props.items.map((props) => (
        <div>{props.title}</div>
        ))} 
      </div>
    </Card>
  );
};

export default Nav;