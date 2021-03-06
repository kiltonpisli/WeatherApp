import React, {useState, useEffect, useRef} from 'react';
import {thunderstorm_d, thunderstorm_n, drizzle_d, drizzle_n, rainy_d, rainy_n, snow_d, snow_n, atmosphere_d, atmosphere_n, clear_d, clear_n, cloudy_d, cloudy_n} from './components/bgImg';
import Loader from './components/Loader';
import Main from './components/Main';
import SideBar from './components/SideBar';
import { useGetYourCurrentWeatherQuery, useGetYourNext7DaysWeatherQuery, useGetSearchCurrentWeatherQuery, useGetSearchNext7DaysWeatherQuery } from './features/weatherApi'

//{lat:"41.2942336", lon: "19.9032832"}
var myPosition = {lat:41.29423, lon:19.90328};
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
  const [bgImg, setBgImg] = useState(atmosphere_n);
  const [search, setSearch] = useState("");
  const [currentWeather, setCurrentWeather] = useState({});
  const [sevenDays, setSevenDays] = useState({});

  const {data: currentWeatherData, isLoading: loadingCW, isSuccess: succCW} = useGetYourCurrentWeatherQuery(myPosition);
  const {data: sevenDaysData, isLoading: loading7D, isSuccess: succ7D} = useGetYourNext7DaysWeatherQuery(myPosition);
  const {data: searchCW, isLoading: loadingSCW, isSuccess: succSCW} = useGetSearchCurrentWeatherQuery(search, {skip: search===""});
  const {data: search7D, isLoading: loadingS7D, isSuccess: succS7D} = useGetSearchNext7DaysWeatherQuery(search, {skip: search===""});

  //loading hook
  useEffect(() => {
    if(loadingCW || loading7D || loadingSCW || loadingS7D){
      return setIsLoading(true);
    }else{
      return setIsLoading(false);
    }
  }, [loading7D, loadingCW, loadingS7D, loadingSCW]);

  // bg change hook
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {     
      // "currentWeather.weather[0]" response: {
        //   "id": 803,
        //   "main": "Clouds",
        //   "description": "broken clouds",
        //   "icon": "04n"}
      const isDay = currentWeather.weather[0].icon.includes('d') ? true : false;
        
      if(currentWeather.weather[0].main === "Thunderstorm"){
        // Group 2xx: Thunderstorm
        isDay ? setBgImg(thunderstorm_d): setBgImg(thunderstorm_n);
      }else if(currentWeather.weather[0].main === "Drizzle"){
        // Group 3xx: Drizzle
        isDay ? setBgImg(drizzle_d): setBgImg(drizzle_n);
      }else if(currentWeather.weather[0].main === "Rain"){
        // Group 5xx: Rain
        isDay ? setBgImg(rainy_d): setBgImg(rainy_n);
      }else if(currentWeather.weather[0].main === "Snow"){
        // Group 6xx: Snow
        isDay ? setBgImg(snow_d): setBgImg(snow_n);
      }else if(currentWeather.weather[0].main === "Clear"){
        // Group 800: Clear
        isDay ? setBgImg(clear_d): setBgImg(clear_n);
      }else if(currentWeather.weather[0].main === "Clouds"){
        // Group 80x: Clouds
        isDay ? setBgImg(cloudy_d): setBgImg(cloudy_n);
      }else{
        // Group 7xx: Atmosphere (mist, smoke ...)
        isDay ? setBgImg(atmosphere_d): setBgImg(atmosphere_n);
      }
      // console.log(currentWeather.weather[0].main, bgImg);
      document.body.style.backgroundImage = `url('${bgImg}')`;
    }
  }, [bgImg, currentWeather])
  
  //your weather hook
  useEffect(() => {
    if(succCW && search===""){
      return setCurrentWeather(currentWeatherData);
    }
  }, [search, currentWeatherData, succCW]);
  useEffect(() => {
    if(succ7D && search===""){
      return setSevenDays(sevenDaysData);
    }
  }, [search, sevenDaysData, succ7D]);

  //from search hook
  const onSearch = (str) => {
    setSearch(str);
  }
  useEffect(() => {
    if(succSCW && search!==""){
      setCurrentWeather(searchCW);
    }
  }, [search, searchCW, succSCW])
  useEffect(() => {
    if(succS7D && search!==""){
      setSevenDays(search7D);
    }
  }, [search, search7D, succS7D])
  
  if(isLoading){
    return (<Loader />);
  }else{
    return (
      <div className="App">
        <Main mainData={currentWeather}/>
        <SideBar weatherDetailsData={currentWeather} sevenDaysData={sevenDays} onSearch={onSearch}/>
      </div>
    );
  }

}

export default App;
