import React from "react";
import { useState } from "react";
import DataCity from "./CityData";
import IMG from "./imag";

const City = ({ city }) => {
  const [img, setimg] = useState("");
  const setIMG = (img) => {
    setimg(img);
  };
  return (
    <div>
      <div key={city} className="col-sm" id="city">
        <span>{city}</span>
        <DataCity city={city} setIMG={setIMG} />
      </div>
    </div>
  );
};

export default City;
