import React from 'react'
import SidebarCategory from './SidebarCategory';

const unixToDay = (unix) => {
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const date = new Date(unix * 1000);

  return dayNames[date.getDay()];
}

const Next7Days = (props) => {  
  return (
    <div className='next-7days'>
        <SidebarCategory category="Next 7 days" />

        <div className="days">
        
          {props.data.list.map((day, i) => {
            if(i !== 0){
              const icon = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
              return (
                <div className="day">
                  <h3 className="dayName">{unixToDay(day.dt)}</h3>
                  <img src={icon} alt="" />
                  <div className="minmax">
                    <h3 className='max'>{Math.floor(day.temp.max)}</h3>
                    <h3 className='min'>{Math.floor(day.temp.min)}</h3>
                  </div>
              </div>
              );
            }
          })}
        
        </div>
    </div>
  )
}

export default Next7Days