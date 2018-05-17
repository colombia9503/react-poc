import React, { Component } from 'react';
import LocationList from './components/WeatherLocation/LocationList'
import './App.css';

const cities = [{key:1, value:"Bogota,col"}, {key:2, value:"Buenos Aires,ar"}, {key:3, value:"Santiago,cl"}];
class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationList cities = {cities}></LocationList>
      </div>
    );
  }
}

export default App;
