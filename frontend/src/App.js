import React from 'react';
import Main from './components/Main';
import SideBar from './components/SideBar';
import { useGetYourCurrentWeatherQuery } from './features/weatherApi'

let myPosition = { lat:"41.2942336", lon: "19.9032832"}
// let myPosition = { lat:"", lon: ""}
// navigator.geolocation.getCurrentPosition(function(position) {
//     myPosition.lat = position.coords.latitude;
//     myPosition.lon = position.coords.longitude;
// });

function App() {
  const {data: currentWeatherData, isLoading, isSuccess, isError} = useGetYourCurrentWeatherQuery(myPosition);
  let mainData = {}, weatherDetailsData={};

  if(isSuccess){
    mainData = {
      temp: currentWeatherData.main.temp,
      city: currentWeatherData.name,
      weather: currentWeatherData.weather[0],
      icon: `http://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@2x.png`,
    }
    weatherDetailsData = {
      main: currentWeatherData.main,
      wind: currentWeatherData.wind,
      visibility: currentWeatherData.visibility,
      sunrise: currentWeatherData.sys.sunrise,
      sunset: currentWeatherData.sys.sunset,
    }
  }

  if(isLoading){
    return (<h1>Loading...</h1>);
  }else{
    return (
      <div className="App">
        <Main mainData={mainData}/>
        <SideBar weatherDetailsData={weatherDetailsData}/>
      </div>
    );
  }

}

export default App;
