import React from "react";
import { useState } from "react";
import DataCity from "./CityData";
import IMG from "./imag";

type TypeProps = {city: string}

const City = (props: TypeProps) => {
  const [img, setimg] = useState("");
  const setIMG = (img: string) => {
    setimg(img);
  };
  return (
    <div>
      <div key={props.city} className="col-sm" id="city">
        <span>{props.city}</span>
        <DataCity data_city={props.city} setIMG={setIMG} />
      </div>
    </div>
  );
};

export default City;
