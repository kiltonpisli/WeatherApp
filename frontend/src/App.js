import React, {useState, useEffect} from 'react';
import Main from './components/Main';
import SideBar from './components/SideBar';
import { useGetYourCurrentWeatherQuery, useGetYourNext7DaysWeatherQuery } from './features/weatherApi'
//{lat:"41.2942336", lon: "19.9032832"}

function App() {
  const [myPosition, setMyPosition] = useState({lat:"41.2942336", lon: "19.9032832"});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      const newPosition = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };
      if(myPosition !== newPosition){
        console.log(myPosition);
        return setMyPosition(newPosition);
      }
    });
  });

  const [currentWeather, setCurrentWeather] = useState({});
  const [sevenDays, setSevenDays] = useState({});
  const {data: currentWeatherData, isLoading: loadingCW, isError: errorCW} = useGetYourCurrentWeatherQuery(myPosition);
  const {data: sevenDaysData, isLoading: loading7D, isError: error7D} = useGetYourNext7DaysWeatherQuery(myPosition);
  
  useEffect(() => {
    if(!loadingCW){
      console.log(currentWeather);
      return setCurrentWeather(currentWeatherData);
    }
  }, [loadingCW, currentWeather, currentWeatherData]);

  useEffect(() => {
    if(!loading7D){
      console.log(sevenDays);
      return setSevenDays(sevenDaysData);
    }
  }, [loading7D, sevenDays, sevenDaysData]);
  

  if(loadingCW || loading7D){
    return (<h1>Loading...</h1>);
  }else if(errorCW || error7D){
    return (<h1>ERROR...</h1>);
  }else{
    return (
      <div className="App">
        <Main mainData={currentWeather}/>
        <SideBar weatherDetailsData={currentWeather} sevenDaysData={sevenDays}/>
      </div>
    );
  }

}

export default App;
