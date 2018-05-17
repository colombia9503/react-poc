import React from 'react';
import Location from './Location';
import WeatherData from '../WeatherData/index';

const WeatherLocation = ({city}) => (
    <div>
        <Location city = {city}/>
        <WeatherData city = {city}/>
    </div>
);

export default WeatherLocation;