import React from 'react';
import WeatherTemperature  from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css';

const WeatherData = () => (
    <div className='weatherData'>
        <WeatherTemperature temperature = {12} state = {'night-cloudy-high'}/>
        <WeatherExtraInfo humidity ={60} wind={'10 m/s'}/>
    </div>
);

export default WeatherData;
