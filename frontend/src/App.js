import React from 'react';
import Main from './components/Main';
import SideBar from './components/SideBar';
import { useGetYourCurrentWeatherQuery, useGetYourNext7DaysWeatherQuery } from './features/weatherApi'

let myPosition = { lat:"41.2942336", lon: "19.9032832"}
// let myPosition = { lat:"", lon: ""}
// navigator.geolocation.getCurrentPosition(function(position) {
//     myPosition.lat = position.coords.latitude;
//     myPosition.lon = position.coords.longitude;
// });


function App() {
  const {data: currentWeatherData, isLoading: loadingCW, isSuccess: successCW, isError: errorCW} = useGetYourCurrentWeatherQuery(myPosition);
  const {data: sevenDaysData, isLoading: loading7D, isSuccess: success7D, isError: error7D} = useGetYourNext7DaysWeatherQuery(myPosition);

  if(loadingCW || loading7D){
    return (<h1>Loading...</h1>);
  }else{
    return (
      <div className="App">
        <Main mainData={currentWeatherData}/>
        <SideBar weatherDetailsData={currentWeatherData} sevenDaysData={sevenDaysData}/>
      </div>
    );
  }

}

export default App;
