import React from 'react'
import SidebarCategory from './SidebarCategory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons'



const AnotherLocation = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Submited');
  }

  return (
    <form className='another-location' onSubmit={handleSearch}>
        <SidebarCategory category="Another Location" />

        <div className="search">
          <input type="text" name='search-location' placeholder='London, UK...' />
          <button type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlassLocation} /> 
          </button>
        </div>
    </form>
  )
}

export default AnotherLocation