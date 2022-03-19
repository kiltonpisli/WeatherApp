import React, {useState, useEffect} from 'react';
import Main from './components/Main';
import SideBar from './components/SideBar';
import { useGetYourCurrentWeatherQuery, useGetYourNext7DaysWeatherQuery } from './features/weatherApi'
//{lat:"41.2942336", lon: "19.9032832"}
var myPosition = {lat:41.2942336, lon:19.9032832};
navigator.geolocation.getCurrentPosition(function(position) {
  const newPosition = {
    lat: Math.floor(position.coords.latitude*100000)/100000,
    lon: Math.floor(position.coords.longitude*100000)/100000,
  };
  if(myPosition !== newPosition){
    // console.log("my: ", myPosition, "new",newPosition);
    myPosition = newPosition;
  }
});

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState({});
  const [sevenDays, setSevenDays] = useState({});

  const {data: currentWeatherData, isLoading: loadingCW, isError: errorCW, isSuccess: succCW} = useGetYourCurrentWeatherQuery(myPosition);
  const {data: sevenDaysData, isLoading: loading7D, isError: error7D, isSuccess: succ7D} = useGetYourNext7DaysWeatherQuery(myPosition);
  
  useEffect(() => {
    if(succCW){
      console.log(currentWeather);
      return setCurrentWeather(currentWeatherData);
    }
  }, [currentWeather, currentWeatherData, succCW]);

  useEffect(() => {
    if(succ7D){
      console.log(sevenDays);
      return setSevenDays(sevenDaysData);
    }
  }, [sevenDays, sevenDaysData, succ7D]);

  useEffect(() => {
    if(loadingCW || loading7D){
      return setIsLoading(true);
    }else{
      return setIsLoading(false);
    }
  }, [loading7D, loadingCW]);
  

  if(isLoading){
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
