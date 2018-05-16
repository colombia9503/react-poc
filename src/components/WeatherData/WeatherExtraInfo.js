import React from 'react';
import WeatherIcons from 'react-weathericons';

const WeatherExtraInfo = ({humidity, wind}) => (
    <div>
        <span>{humidity} <WeatherIcons name="humidity" size="2x"/> - </span>
        <span>{wind} <WeatherIcons name="sandstorm" size="2x"/></span>
    </div>
);
export default WeatherExtraInfo;