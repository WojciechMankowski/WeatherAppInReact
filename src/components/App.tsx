import React from "react";
import Form from "./Form";
import Result from "./Result";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "../Style/style.scss";

class App extends React.Component {
  state = {
    city: "",
    lat: null,
    lot: null,
    data_wether: {},
  };
  setNameCity = (namecity) => {
    this.setState({
      city: namecity,
    });
  };
  setData = (data) => {
    const date = new Date().toLocaleTimeString();
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
    this.setState({ data_wether: weather });
  };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        lat: position.coords.latitude,
        lot: position.coords.longitude,
      });
    });
    if (this.state.lat !== null) {
      const API_key = "599076ae1ed26c6c1cb2c6a3759db846";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lot}&appid=${API_key}&units=metric`;
      axios.get(url).then((result) => this.setData(result));
    }
  }

  ConnectAPI = async (namecity) => {
    const API_key = "599076ae1ed26c6c1cb2c6a3759db846";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${namecity}&appid=${API_key}&units=metric`;
    axios
      .get(URL)
      .then((res) => this.setData(res.data))
      .catch((error) => this.setState({ data_wether: error }));
  };

  render() {
    if (this.state.city === "") {
      return (
        <div className="container">
          <h1>POGODA W TWOIM MIEŚCIE</h1>
          <Form setNameCity={this.setNameCity} ConnectAPI={this.ConnectAPI} />
        </div>
      );
    } else if (this.state.data_wether.isAxiosError) {
      return (
        <div className="container">
          <h1>POGODA W TWOIM MIEŚCIE</h1>
          <Form setNameCity={this.setNameCity} ConnectAPI={this.ConnectAPI} />
          <p>Podano błędne miasto</p>
        </div>
      );
    } else {
      return (
        <div className="container">
          <h1>POGODA W TWOIM MIEŚCIE</h1>
          <Form setNameCity={this.setNameCity} ConnectAPI={this.ConnectAPI} />
          <Result data={this.state.data_wether} />
        </div>
      );
    }
  }
}
// data_wether
export default App;
