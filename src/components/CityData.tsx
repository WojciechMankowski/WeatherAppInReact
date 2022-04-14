import axios from "axios";
import React, { Component } from "react";
import IMG from "./imag";
import Inf from "./Informacje"
class DataCity extends Component {
  state = {
    data: {},
  };
  setDate = (data) => {
    const date = new Date().toLocaleDateString();
    const sunrise_data = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    const sunset_data = new Date(data.sys.sunset * 1000).toLocaleTimeString();
    const main_data = data.main;
    const icon = data.weather[0].icon;
    const weather = {
      city: this.state.city,
      data: date,
      icon: icon,
      sunrise: sunrise_data,
      sunset: sunset_data,
      temp: main_data.temp,
      feels_like_temp: main_data.feels_like,
      temp_max: main_data.temp_max,
      temp_min: main_data.temp_min,
      humidity: main_data.humidity,
      pressure: main_data.pressure,
      windy_speed: data.wind.speed,
    };
    this.setState({ data: weather });
  };
  ConnectAPI = async (namecity) => {
    const API_key = "599076ae1ed26c6c1cb2c6a3759db846";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${namecity}&appid=${API_key}&units=metric`;
    axios
      .get(URL)
      .then((res) => this.setDate(res.data))
      .catch((error) => this.setState({ data_wether: error }));
  };
  componentDidMount() {
    this.ConnectAPI(this.props.city);
    this.props.setIMG(this.state.data.icon);
  }
  render() {
      const img = this.state.data.icon
    return (
      <div className="row">
        <div className="col" id="img">
          <IMG img={img} key={img} />
        </div>
        <Inf temp={this.state.data.temp} windy={this.state.data.windy_speed}/>
      </div>
    );
  }
}

export default DataCity;
