import React from 'react'
import SidebarCategory from './SidebarCategory'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureHalf, faTemperatureArrowDown, faTemperatureArrowUp, faWind, faDroplet, faGaugeHigh, faEye } from '@fortawesome/free-solid-svg-icons'

const WeatherDetails = () => {
  return (
    <div className='weather-details'>
        <SidebarCategory category="Weather Details" />

        <div className="flex-box">
        <div className="box">
                <FontAwesomeIcon icon={faTemperatureHalf} />
                <p>Feels like</p>
                <h4>22<sup>&deg;</sup></h4>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faTemperatureArrowDown} />
                <p>Min</p>
                <h4>22<sup>&deg;</sup></h4>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faTemperatureArrowUp} />
                <p>Max</p>
                <h4>22<sup>&deg;</sup></h4>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faWind} />
                <p>Wind</p>
                <h4>5km/h</h4>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faDroplet} />
                <p>Humidity</p>
                <h4>15%</h4>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faGaugeHigh} />
                <p>Pressure</p>
                <h4>24.25 in</h4>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faEye} />
                <p>Visibility</p>
                <h4>N/A</h4>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faDroplet} />
                <p>Feels like</p>
                <h4>22</h4>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faGaugeHigh} />
                <p>Feels like</p>
                <h4>22</h4>
            </div>
        </div>
    </div>
  )
}

export default WeatherDetails