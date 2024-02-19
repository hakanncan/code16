import React from 'react';

const FahrenheitButton = ({ onClick }) => (
  <button className="convert-button" onClick={onClick}>
    Fahrenheit
  </button>
);

export default FahrenheitButton