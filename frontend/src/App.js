import React from 'react';
import CurrentWeather from './components/CurrentWeather.js'
import { useGetYourCurrentWeatherQuery } from './features/weatherApi'

let myPosition = { lat:"", lon: ""}
navigator.geolocation.getCurrentPosition(function(position) {
    myPosition.lat = position.coords.latitude;
    myPosition.lon = position.coords.longitude;
});

function App() {
  const {data: currentWeatherData, isLoading, isSuccess, isError} = useGetYourCurrentWeatherQuery(myPosition);
  console.log(currentWeatherData);

  return (
    <div className="App">
      <CurrentWeather />
    </div>
  );
}

export default App;
