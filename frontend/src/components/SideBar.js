import React from 'react'
import AnotherLocation from './AnotherLocation'
import WeatherDetails from './WeatherDetails';

const SideBar = () => {
  return (
    <div className='sidebar'>
        <AnotherLocation />
        <WeatherDetails />
    </div>
  )
}

export default SideBar