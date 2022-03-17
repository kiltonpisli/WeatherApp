import React from 'react'

const Main = () => {
  return (
    <div className='main'>
        <h3 className="title">Beder Weather App</h3>

        <div className="current-weather">
            <h1 className="deg">16 <sup>&deg;</sup></h1>
            <div className="location-time">
                <h2 className="location">London</h2>
                <p className="time">06:09 - Monday, 9 Sep 2022</p>
            </div>
            <div className="details">
                <div className="img">
                  <img src="http://openweathermap.org/img/wn/11d@2x.png" alt="" />
                </div>
                <p>Cloudy</p>
            </div>
        </div>
    </div>
  )
}

export default Main;