import React from 'react'
import AnotherLocation from './AnotherLocation';
import WeatherDetails from './WeatherDetails';
import Next7Days from './Next7Days';

const SideBar = () => {
  return (
    <div className='sidebar'>
        <AnotherLocation />
        <WeatherDetails />
        <Next7Days />
    </div>
  )
}

export default SideBar