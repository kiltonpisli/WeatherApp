import React from 'react'
import {unixToDay} from '../features/functions';
import SidebarCategory from './SidebarCategory';

const Next7Days = (props) => {  
  return (
    <div className='next-7days'>
        <SidebarCategory category="Next 7 days" />

        <div className="days">
        
          {// eslint-disable-next-line array-callback-return
          props.data.list.map((day, i) => {
            if(i !== 0){
              const icon = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
              return (
                <div className="day" key={i}>
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