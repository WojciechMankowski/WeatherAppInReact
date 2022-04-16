import React from "react";
import { Wind} from "react-bootstrap-icons";
import Temperatura from "./Temperatura";
import Header from "./Header";
import Data from "../Helpers/TypData"
import weather from "../Helpers/TypeWeaher";
const Result = (props: {data: weather}) => {
  const data: weather = props.data;
  console.log(typeof data.data)
  return (
    <div className="resultat">
      <Header
        city={data.city}
        sunrise={data.sunrise}
        sunset={data.sunset}
        data={data.data}
      />
      <div className="board">
        <Temperatura temp={data.temp} name="" />
        <br />
        <Temperatura temp={data.temp_max} name="Max " />
        <Temperatura temp={data.temp_min} name=" Min " />
        <br />
        <Temperatura
          temp={data.feels_like_temp}
          name=" Odczuwalna temperatura "
        />
        <br/>
        <span>
          Siła wiatru <Wind /> {data.windy_speed} km/h
        </span>{" "}
        <br />
        <span>Ciśnienie: {data.pressure} hPa</span> <br />
        <span>Wilgodność: {data.humidity}% </span>
      </div>
    </div>
  );
};

export default Result;
