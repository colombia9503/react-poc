import React from 'react';

const Location = (data) => {
    console.log(data);
    let {city} = data;
    // debugger;
    return (<div><h1>{city}</h1></div>)
};
export default Location;

