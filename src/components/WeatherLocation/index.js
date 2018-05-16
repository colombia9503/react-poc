import React from 'react';
import Location from './Location';
import WeatherData from '../WeatherData/index';

const WeatherLocation = () => (
    <div>
        <Location city = {'Medellin!'}/>
        <WeatherData/>
    </div>
);

export default WeatherLocation;