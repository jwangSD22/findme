import React from 'react'
import data from './data'


function DifficultyInfo({difficultyInfo,stage}) {



  return (
    
    difficultyInfo.map((e)=>
      
    <div key = {e[2]} className='difficultyInfo'>
      <div className={`difficulty ${e[2]}`}>{e[2]}</div>
      <div>
        <img alt={e[2]} className='imgThumb' src={data[stage][`${e[2].toLowerCase()}`]}></img>
        </div>
    <div className='nameCap'>{e[0]}</div>
    <div className='seriesCap'>{e[1]}</div>
    </div>
  )
  )
}

export default DifficultyInfo