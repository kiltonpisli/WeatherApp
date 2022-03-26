import React, {useState, useEffect} from 'react';
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
  const [search, setSearch] = useState("");
  const [currentWeather, setCurrentWeather] = useState({});
  const [sevenDays, setSevenDays] = useState({});

  const {data: currentWeatherData, isLoading: loadingCW, isError: errorCW, isSuccess: succCW} = useGetYourCurrentWeatherQuery(myPosition);
  const {data: sevenDaysData, isLoading: loading7D, isError: error7D, isSuccess: succ7D} = useGetYourNext7DaysWeatherQuery(myPosition);
  const {data: searchCW, isLoading: loadingSCW, isError: errorSCW, isSuccess: succSCW} = useGetSearchCurrentWeatherQuery(search, {skip: search===""});
  const {data: search7D, isLoading: loadingS7D, isError: errorS7D, isSuccess: succS7D} = useGetSearchNext7DaysWeatherQuery(search, {skip: search===""});

  useEffect(() => {
    if(succCW && search===""){
      // console.log(currentWeather);
      return setCurrentWeather(currentWeatherData);
    }
  }, [search, currentWeatherData, succCW]);

  useEffect(() => {
    if(succ7D && search===""){
      // console.log(sevenDays);
      return setSevenDays(sevenDaysData);
    }
  }, [search, sevenDaysData, succ7D]);

  useEffect(() => {
    if(loadingCW || loading7D || loadingSCW || loadingS7D){
      return setIsLoading(true);
    }else{
      return setIsLoading(false);
    }
  }, [loading7D, loadingCW, loadingS7D, loadingSCW]);

  const onSearch = (str) => {
    setSearch(str);
  }

  useEffect(() => {
    if(succSCW && search!==""){
      setCurrentWeather(searchCW);
      // setSevenDays(search)
    }
  }, [search, searchCW, succSCW])

  useEffect(() => {
    if(succS7D && search!==""){
      setSevenDays(search7D);
      // setSevenDays(search)
    }
  }, [search, search7D, succS7D])
  
  

  if(isLoading){
    return (<Loader />);
  // }else if(errorCW || error7D){
  //   return (<h1>ERROR...</h1>);
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
