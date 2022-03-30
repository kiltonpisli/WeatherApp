import React, {useState, useEffect, useRef} from 'react';
import img1 from './img/cloudy.jpeg';
import img2 from './img/rainy.jpeg';
import img3 from './img/sunny.jpeg';
import img4 from './img/sunny 2.jpeg';
import img5 from './img/sunny 3.jpeg';
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
  const [bgImg, setBgImg] = useState(img1);
  const [search, setSearch] = useState("");
  const [currentWeather, setCurrentWeather] = useState({});
  const [sevenDays, setSevenDays] = useState({});

  const {data: currentWeatherData, isLoading: loadingCW, isError: errorCW, isSuccess: succCW} = useGetYourCurrentWeatherQuery(myPosition);
  const {data: sevenDaysData, isLoading: loading7D, isError: error7D, isSuccess: succ7D} = useGetYourNext7DaysWeatherQuery(myPosition);
  const {data: searchCW, isLoading: loadingSCW, isError: errorSCW, isSuccess: succSCW} = useGetSearchCurrentWeatherQuery(search, {skip: search===""});
  const {data: search7D, isLoading: loadingS7D, isError: errorS7D, isSuccess: succS7D} = useGetSearchNext7DaysWeatherQuery(search, {skip: search===""});

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
        
        // Group 2xx: Thunderstorm
        // Group 3xx: Drizzle
        // Group 5xx: Rain
        // Group 6xx: Snow
        // Group 7xx: Atmosphere (mist, smoke ...)
        // Group 800: Clear
        // Group 80x: Clouds
      if(currentWeather.weather[0].main === "Clouds"){
        setBgImg(img1);
      }else{
        setBgImg(img2);
      }

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
