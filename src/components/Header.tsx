import {Sunrise, Sunset } from "react-bootstrap-icons";

type PropsTyp = { sunrise: string, sunset: string, data: string, city: string }

const Header = (props: PropsTyp) => {
  return (
    <div>
      <h3>{props.city}</h3>
      <span>Teraz {props.data}</span><br/>
      <span className="sunrise">
          {" "}
        <Sunrise /> {props.sunrise}
      </span>
      <span className="sunset">
      {" "}
        <Sunset /> {` ${props.sunset}`}
      </span>
    </div>
  );
};

export default Header;
