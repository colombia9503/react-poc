import React from 'react';
import WeatherLocation from './index';
import PropTypes from 'prop-types';

const strToComponent = cities => (
    cities.map((key, value) => (<WeatherLocation key={key} city={value}/>))
);

const LocationList = ({cities}) => {
    return(
        <div>
            {strToComponent(cities)}
        </div>
    );
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired
}
export default LocationList;