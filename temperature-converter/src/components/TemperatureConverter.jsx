import React, { useState } from "react"
import "./TemperatureConverter.css"
import FahrenheitButton from "./FahrenheitButton"
import KelvinButton from "./KelvinButton"

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("")
  const [fahrenheit, setFahrenheit] = useState("")
  const [kelvin, setKelvin] = useState("")
  const [resultMessage, setResultMessage] = useState("")

  const convertToFahrenheit = () => {
    if (celsius !== "") {
      const fahrenheitResult = (parseFloat(celsius) * 9) / 5 + 32;
      setFahrenheit(fahrenheitResult);
      setResultMessage(`${fahrenheitResult.toFixed(2)}°F`);
    } else {
      setResultMessage("Lütfen Celsius değeri giriniz.");
    }
  };

  const convertToKelvin = () => {
    if (celsius !== "") {
      const kelvinResult = parseFloat(celsius) + 273.15;
      setKelvin(kelvinResult);
      setResultMessage(`${kelvinResult.toFixed(2)}K`);
    } else {
      setResultMessage("Lütfen Celsius değeri giriniz.");
    }
  };

  const resetValues = () => {
    setCelsius("");
    setFahrenheit("");
    setKelvin("");
    setResultMessage("");
  };

  return (
    <div className="container">
      <h1>Sıcaklık Dönüştürücü</h1>
      <input
        type="text"
        id="celsius"
        className="input-field"
        placeholder="Değer Giriniz"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
      />

      

      <div className="button-container">
        <FahrenheitButton onClick={convertToFahrenheit} />
        <KelvinButton onClick={convertToKelvin} />
      </div>

     

      <div className="result-container">
        {resultMessage && <p className="result-message">{`${celsius}°C = ${resultMessage}`}</p>}
      </div>

      <button className="reset-button" onClick={resetValues}>
        Sıfırla
      </button>
    </div>
  );
};

export default TemperatureConverter;
