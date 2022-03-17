import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons'

const AnotherLocation = () => {
  return (
    <form action="#">
        <input type="text" name='' />
        <button type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlassLocation} /> 
        </button>
    </form>
  )
}

export default AnotherLocation