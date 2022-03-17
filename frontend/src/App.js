import React from 'react';
import Main from './components/Main';
import SideBar from './components/SideBar';
// import { useGetYourCurrentWeatherQuery } from './features/weatherApi'

// let myPosition = { lat:"", lon: ""}
// navigator.geolocation.getCurrentPosition(function(position) {
//     myPosition.lat = position.coords.latitude;
//     myPosition.lon = position.coords.longitude;
// });

function App() {
  // const {data: currentWeatherData, isLoading, isSuccess, isError} = useGetYourCurrentWeatherQuery(myPosition);
  // console.log(currentWeatherData);

  return (
    <div className="App">
      <Main />
      <SideBar />
    </div>
  );
}

export default App;
