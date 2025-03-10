import React from "react";
import "./CurrentTemperature.css";

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

export default CurrentTemperature;
