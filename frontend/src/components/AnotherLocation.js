import React from 'react'
import SidebarCategory from './SidebarCategory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons'

const AnotherLocation = () => {
  return (
    <form action="#" className='another-location'>
        <SidebarCategory category="Another Location" />

        <input type="text" name='' />
        <button type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlassLocation} /> 
        </button>
    </form>
  )
}

export default AnotherLocation