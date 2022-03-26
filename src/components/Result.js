import React from "react";
import { ThermometerHalf, Wind, Sunrise, Sunset } from "react-bootstrap-icons";
import Animacja from "./Animacja/Animaca";

const Result = ({ data, error, city }) => {
  let name = "temp cold";
  if (data.temp > 20) {
    name = "temp hot";
  }
 
  return (
    <div className="resultat">
      <h3>
        Pogoda w {data.city} w dniu {data.data}
      </h3>
      <div >
        <span className="sunrise">
          <Sunrise />
          {` ${data.sunrise} `}
        </span>
        <span className="sunset">
          <Sunset /> {` ${data.sunset}`}
        </span>
        <br />
        <div className="board">
          <div className={name}>
            <ThermometerHalf /> {data.temp + " \xB0C"}{" "}
          </div>
          <div>
            <span>Max {data.temp_max + " \xB0C "}</span>
            <span>Min {data.temp_min + " \xB0C"} </span>
            <br />
            <span>
              {" "}
              Odczuwalna temperatura: {data.feels_like_temp + " \xB0C"}
            </span>
          </div>
        </div>
        <div className="board2">
          <span>
            Siła wiatru <Wind /> {data.windy_speed} km/h
          </span>{" "}
          <br />
          <span>Ciśnienie: {data.pressure} hPa</span> <br />
          <span>Wilgodność: {data.humidity}% </span>
        </div>
      </div>
    </div>
  );
};

export default Result;
