import React from "react";

const CurrentWeather = ({ city, temp, condition, high, low }) => {

const CurrentTemperature = ({ city, temp, condition, high, low }) => {

    return (
        <div className="current-temp-container">
            <h1>{city}</h1>
            <h2>{temp}°C</h2>
            <p>{condition}</p>
            <p>H: {high}°C - L: {low}°C</p>
        </div>
    );
};


export default CurrentWeather;

export default CurrentTemperature;

