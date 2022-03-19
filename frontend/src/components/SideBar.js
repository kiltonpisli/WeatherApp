import React from 'react'
import AnotherLocation from './AnotherLocation';
import WeatherDetails from './WeatherDetails';
import Next7Days from './Next7Days';

const SideBar = (props) => {
  return (
    <div className='sidebar'>
        <AnotherLocation onSearch={props.onSearch}/>
        <WeatherDetails data={props.weatherDetailsData}/>
        <Next7Days data={props.sevenDaysData}/>
    </div>
  )
}

export default SideBar