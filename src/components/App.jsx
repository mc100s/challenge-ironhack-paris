// src/App.js

import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Temperature from './Temperature'
import CustomizeImage from './CustomizeImage'
import Celebrities from './Celebrities'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/temperature" exact component={Temperature} />
        <Route path="/customize-image" exact component={CustomizeImage} />
        <Route path="/celebrities" exact component={Celebrities} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </div>
  );
}

export default App;
