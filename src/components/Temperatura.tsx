import React from "react";
import { ThermometerHalf } from "react-bootstrap-icons";

const Temperatura = (props: { temp: number, name: string }) => {
  let name_class = "temp cold";
  if (props.temp > 20) {
    name_class = "temp hot";
  }
  if (props.name === "") {
    return (
      <span className={name_class}>
        <ThermometerHalf /> {props.temp + " \xB0C"}{" "}
      </span>
    );
  } else {
    return <span className={name_class}>{props.name + props.temp + " \xB0C"} </span>;
  }
};

export default Temperatura;
