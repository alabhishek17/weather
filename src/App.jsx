import React, { useState, useEffect } from 'react';
import './App.css';

const cities = ["London", "Paris", "New York", "Tokyo", "Berlin"];

function App() {
  const [cityIndex, setCityIndex] = useState(0);
  const [details, setDetails] = useState([]);

  const fetchWeather = async (cityName) => {
    try {
      const response = await fetch(`https://python3-dot-parul-arena-2.appspot.com/test?cityname=${cityName}`);
      const data = await response.json();
      const currentTime = new Date();
      const dataTime = new Date(data.date_and_time);
      const ageInHours = Math.round((currentTime - dataTime) / (1000 * 60 * 60));
      const newRow = {
        city: cityName,
        temperature: data.temp_in_celsius,
        // humidity: data.humidity,
        pressure: data.pressure_in_hPa,
        description: data.description,
        dataAge: ageInHours,
      };
      setDetails((prevDetails) => [...prevDetails, newRow]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleGetWeather = () => {
    if (cityIndex < cities.length) {
      fetchWeather(cities[cityIndex]);
      setCityIndex(cityIndex + 1);
    } else {
      setCityIndex(0);
      setDetails([]);
    }
  };

  const handleDeleteRow = (index) => {
    setDetails((prevDetails) => prevDetails.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="city-list">
          <h2>City List</h2>
          <table>
            <thead>
              <tr>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {cities.map((city, index) => (
                <tr key={index} className={cityIndex === index ? 'highlight' : ''}>
                  <td>{city}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="get-weather-button" onClick={handleGetWeather}>Get Weather</button>
        </div>
        
        <div className="details">
          <h2>Details</h2>
          <table>
            <thead>
              <tr>
                <th>City</th>
                <th>Temperature (°C)</th>
                {/* <th>Humidity (%)</th> */}
                <th>Pressure (hPa)</th>
                <th>Description</th>
                <th>Data Age (hours)</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {details.length === 0 ? (
                <tr>
                  <td colSpan="7" className="no-data">No Data</td>
                </tr>
              ) : (
                details.map((detail, index) => (
                  <tr key={index}>
                    <td>{detail.city}</td>
                    <td>{detail.temperature}°C</td>
                    {/* <td>{detail.humidity}%</td> */}
                    <td>{detail.pressure} hPa</td>
                    <td>
                      <input type="text" defaultValue={detail.description} />
                    </td>
                    <td>{detail.dataAge}</td>
                    <td>
                      <button className="delete-button" onClick={() => handleDeleteRow(index)}>Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <button className="search-button">Search</button>
        </div>
      </div>
    </div>
  );
}

export default App;
