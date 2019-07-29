import React, { Component } from "react";

export default class Temperature extends Component {
  state = {
    temperature: 42
  };
  handleChange = e => {
    let value = e.target.value === "" ? "" : Number(e.target.value);
    this.setState({
      temperature: value
    });
  };
  render() {
    let text;
    let style;
    if (this.state.temperature <= 10) {
      text = "It's cold ❄️";
      style = { color: "blue" };
    } else if (this.state.temperature <= 30) {
      text = "It's nice 🌼";
      style = { color: "black" };
    } else {
      text = "It's warm ☀️";
      style = { color: "red" };
    }
    return (
      <div>
        <h1>Temperature</h1>
        <input
          type="number"
          value={this.state.temperature}
          onChange={this.handleChange}
        />
        {this.state.temperature !== "" && <div style={style}>{text}</div>}
      </div>
    );
  }
}
