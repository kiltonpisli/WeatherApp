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
                <h4>22</h4>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faTemperatureHalf} />
                <p>Feels like</p>
                <h4>22</h4>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faTemperatureHalf} />
                <p>Feels like</p>
                <h4>22</h4>
            </div>
        </div>
    </div>
  )
}

export default WeatherDetails