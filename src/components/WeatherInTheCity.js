import React from "react";
import Form from "./Form";
import Result from "./Result";

const WeatherInTheCity = ({ NameCity, ConnectAPI, data_wether }) => {
  if (this.state.city === "") {
    return (
      <div className="container">
        <h1>POGODA W TWOIM MIEŚCIE</h1>
        <Form setNameCity={NameCity} ConnectAPI={ConnectAPI} />
      </div>
    );
  } else if (this.state.data_wether.isAxiosError) {
    <div className="container">
      <h1>POGODA W TWOIM MIEŚCIE</h1>
      <Form setNameCity={NameCity} ConnectAPI={ConnectAPI} />
      <p>Podano błędne miasto</p>
    </div>;
  } else {
    <div className="container">
      <h1>POGODA W TWOIM MIEŚCIE</h1>
      <Form setNameCity={NameCity} ConnectAPI={ConnectAPI} />
      <Result data={data_wether} />
    </div>;
  }
};

export default WeatherInTheCity