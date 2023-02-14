import React from 'react'
import data from './data'

function Findbar({stage,choosing,difficultyInfo}) {

  

  return (<div className='findBar'>
    
    {choosing?<h1>BOOTY</h1>:difficultyInfo.map((e)=>
      
      <div className='difficultyInfo'>
        <div className={`difficulty ${e[2]}`}>{e[2]}</div>
        <div className='imgThumb'> <img src={data[stage][`${e[2].toLowerCase()}`]}></img></div>
      <div className='nameCap'>{e[0]}</div>
      <div className='seriesCap'>{e[1]}</div>
      </div>)}
  </div>

  )
}

export default Findbar