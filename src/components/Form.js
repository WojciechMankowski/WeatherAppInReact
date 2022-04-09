import React from "react";


class Form extends React.Component {
  state = {
    city: "",
  };
  onFormSumbint = (event) => {
    event.preventDefault()
    this.props.setNameCity(this.state.city)
}
  render() {
    const entry = (event) => {
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
        <input className="btn bg-warning text-dark"
          onClick={() => {
            this.props.ConnectAPI(this.state.city);
          }} type="submit"  value="Szukaj"/>
       
      </form>
    );
  }
}

export default Form;
