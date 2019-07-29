import React, { Component } from "react";

export default class CustomizeImage extends Component {
  // Executed before the 1st render
  constructor(props) {
    super(props);
    this.state = {
      text: "/favicon.ico",
      size: 100
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    let value = e.target.type === "range" ? Number(e.target.value) : e.target.value
    this.setState({
      [e.target.name]: value
    });
  }
  render() {
    return (
      <div>
        <h1>CustomizeImage</h1>
        <input
          type="text"
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="range"
          min="0"
          max="200"
          name="size"
          value={this.state.size}
          onChange={this.handleChange}
        />
        <p>
          {this.state.size} x {this.state.size} px
        </p>
        <img
          src={this.state.text}
          style={{ width: this.state.size, height: this.state.size }}
          alt=""
        />
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
}
