import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';


const getWeatherIcon = (state) => {
    return (<WeatherIcons name={state} size="2x"/>);
}

const WeatherTemperature = ({temperature, state}) => (
    <div>
        {getWeatherIcon(state)}
        <span>{`${temperature} C°`}</span>
    </div>
);

 WeatherTemperature.propTypes = {
    temperature: PropTypes.number,
    state: PropTypes.string
}

export default WeatherTemperature;