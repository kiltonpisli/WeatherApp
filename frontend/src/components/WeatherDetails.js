import React from 'react'
import SidebarCategory from './SidebarCategory'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureHalf, faTemperatureArrowDown, faTemperatureArrowUp, faWind, faDroplet, faGaugeHigh, faEye,faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const unixToTime = (unix) => {
    var date = new Date(unix * 1000);
    var hours = "0" + date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();

    return hours.substr(-2) + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}

const WeatherDetails = (props) => {
    console.log(props);
  return (
    <div className='weather-details'>
        <SidebarCategory category="Weather Details" />

        <div className="flex-box">
        <div className="box">
                <FontAwesomeIcon icon={faTemperatureHalf} />
                <p>Feels like</p>
                <h4>{Math.floor(props.data.main.feels_like)}<sup>&deg;</sup></h4>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faTemperatureArrowDown} />
                <p>Min</p>
                <h4>{Math.floor(props.data.main.temp_min)}<sup>&deg;</sup></h4>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faTemperatureArrowUp} />
                <p>Max</p>
                <h4>{Math.floor(props.data.main.temp_max)}<sup>&deg;</sup></h4>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faWind} />
                <p>Wind</p>
                <h4>{props.data.wind.speed} m/s</h4>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faDroplet} />
                <p>Humidity</p>
                <h4>{props.data.main.humidity}%</h4>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faGaugeHigh} />
                <p>Pressure</p>
                <h4>{props.data.main.pressure} hPa</h4>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faEye} />
                <p>Visibility</p>
                <h4>{props.data.visibility} m</h4>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faSun} />
                <p>Sunrise</p>
                <h4>{unixToTime(props.data.sunrise)}</h4>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faMoon} />
                <p>Sunset</p>
                <h4>{unixToTime(props.data.sunset)}</h4>
            </div>
        </div>
    </div>
  )
}

export default WeatherDetails