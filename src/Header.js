import React from 'react'
import timeToString from './timeToString'



function Header({timeRunning,timer}) {



  return (
    <div className='header'>
{timeRunning?timeToString(timer):'FIND ME!'}
    </div>

  )
}

export default Header