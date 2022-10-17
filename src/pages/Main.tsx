import React from 'react'
import Heading from './components/Heading'

import InputField from './components/InputField'
import Progress from './components/Progress'
const Main = () => {
  return (
    <div className='form__container'>
        <Heading/>
        <Progress/>
        <InputField/>
    </div>
  )
}

export default Main