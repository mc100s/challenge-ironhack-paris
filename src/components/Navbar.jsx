import React, { Component } from "react";
import { Switch, Route, NavLink } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/temperature">Temperature</NavLink>
        <NavLink exact to="/customize-image">Customize Image</NavLink>
        <NavLink exact to="/celebrities">Celebrities</NavLink>
      </nav>
    );
  }
}
