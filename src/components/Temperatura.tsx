import React from "react";
import { ThermometerHalf } from "react-bootstrap-icons";

const Temperatura = ({ temp, name }) => {
  let name_class = "temp cold";
  if (temp > 20) {
    name_class = "temp hot";
  }
  if (name === "") {
    return (
      <span className={name_class}>
        <ThermometerHalf /> {temp + " \xB0C"}{" "}
      </span>
    );
  } else {
    return <span className={name_class}>{name + temp + " \xB0C"} </span>;
  }
};

export default Temperatura;
