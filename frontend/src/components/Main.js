import React from 'react'

const dateString = () => {
  const cDate = new Date();
  const h = (cDate.getHours()<10)?"0"+cDate.getHours():cDate.getHours();
  const m = (cDate.getMinutes()<10)?"0"+cDate.getMinutes():cDate.getMinutes();
  let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  day = day[cDate.getDay()];
  const date = cDate.getDate();
  let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
  month = month[cDate.getMonth()];
  const year = cDate.getFullYear();

  return h+':'+m+ " - " +day+", "+date+" "+month+" "+year;
}

const Main = (props) => {
  const icon = `http://openweathermap.org/img/wn/${props.mainData.weather[0].icon}@2x.png`;
  
  return (
    <div className='main'>
        <h3 className="title">Beder Weather App</h3>

        <div className="current-weather">
            <h1 className="deg">{Math.floor(props.mainData.main.temp)} <sup>&deg;</sup></h1>
            <div className="location-time">
                <h2 className="location">{props.mainData.name}, {props.mainData.sys.country}</h2>
                <p className="time">{dateString()}</p>
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