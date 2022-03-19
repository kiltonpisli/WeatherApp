import React, { useState } from 'react'
import SidebarCategory from './SidebarCategory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons'

const AnotherLocation = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <form className='another-location' onSubmit={(e) => {e.preventDefault(); props.onSearch(inputValue)}}>
        <SidebarCategory category="Another Location" />

        <div className="search">
          <input type="text" name='search-location' placeholder='London, UK...' onChange={handleChange}/>
          <button type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlassLocation} /> 
          </button>
        </div>
    </form>
  )
}

export default AnotherLocation