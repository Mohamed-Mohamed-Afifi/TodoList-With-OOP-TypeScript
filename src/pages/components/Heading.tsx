import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
 
const Heading = () => {
  return (
    <>
        <h1 className="head">ToDo List<FontAwesomeIcon icon={faClipboardList} className='mx-3'/></h1>
    </>
  )
}

export default Heading