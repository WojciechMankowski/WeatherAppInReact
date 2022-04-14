import React from "react";
import { Component } from "react";

class Form extends Component<{ setNameCity: Function; ConnectAPI: Function }> {
  state = {
    city: "",
  };
  onFormSumbint = (event: any) => {
    event.preventDefault();
    this.props.setNameCity(this.state.city);
  };
  render() {
    const entry = (event: any) => {
      this.setState({ city: event.target.value });
    };
    return (
      <form onSubmit={this.onFormSumbint}>
        <label>Wpisz miasto: </label> <br />
        <input
          className="form-control bg-light
          text-dark"
          type="text"
          onChange={entry}
          value={this.state.city}
        />
        <input
          className="btn bg-warning text-dark"
          onClick={() => {
            this.props.ConnectAPI(this.state.city);
          }}
          type="submit"
          value="Szukaj"
        />
      </form>
    );
  }
}

export default Form;
