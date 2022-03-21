import React from 'react'
import {mainDateString} from '../features/functions';


const Main = (props) => {
  const icon = `http://openweathermap.org/img/wn/${props.mainData.weather[0].icon}@2x.png`;
  
  return (
    <div className='main'>
        <h3 className="title">Beder Weather App</h3>

        <div className="current-weather">
            <h1 className="deg">{Math.floor(props.mainData.main.temp)} <sup>&deg;</sup></h1>
            <div className="location-time">
                <h2 className="location">{props.mainData.name}, {props.mainData.sys.country}</h2>
                <p className="time">{mainDateString(props.mainData.dt)}</p>
                {/* // 06:09 - Monday, 9 Sep 2022 */}
            </div>
            <div className="details">
                <div className="img">
                  <img src={icon} alt="" />
                </div>
                <p>{props.mainData.weather[0].description}</p>
            </div>
        </div>
    </div>
  )
}

export default Main;