import {Sunrise, Sunset } from "react-bootstrap-icons";
const Header = ({ sunrise, sunset, data, city }) => {
  return (
    <div>
      <h3>{city}</h3>
      <span>Teraz {data}</span><br/>
      <span className="sunrise">
          {" "}
        <Sunrise /> {sunrise}
      </span>
      <span className="sunset">
      {" "}
        <Sunset /> {` ${sunset}`}
      </span>
    </div>
  );
};

export default Header;
