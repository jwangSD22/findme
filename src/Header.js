import React from 'react'
import millisecondsToSeconds from 'date-fns/millisecondsToSeconds'
import millisecondsToMinutes from 'date-fns/millisecondsToMinutes'
import millisecondsToHours from 'date-fns/millisecondsToHours'




function Header({timeRunning,timer}) {

const seconds = millisecondsToSeconds(timer)
const minutes = millisecondsToMinutes(timer)
const hours = millisecondsToHours(timer)

const timeToString = () => {
return `${hours>0?hours+' h:':''} ${minutes>0?minutes%60+' m:':''} ${seconds>0?seconds%60+'s: ':''} ${timer.toString().slice(-3,-1)+'ms'}`
}


  return (
    <div className='header'>
{timeRunning?timeToString():'FIND ME!'}
    </div>

  )
}

export default Header