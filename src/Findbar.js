import React from 'react'
import data from './data'
import 'animate.css'

function Findbar({toFind, stage,choosing,difficultyInfo}) {

  

  return (<div className='findBar'>
    
    {choosing?<h1>BOOTY</h1>:difficultyInfo.map((e)=>
      
    <div key = {e[2]} className={
      toFind[e[2].toLowerCase()]===true?'difficultyInfo':
'difficultyInfo animate__animated animate__bounceOut'

    }>
        <div className={`difficulty ${e[2]}`}>{e[2]}</div>
        <div className='imgThumb'> <img src={data[stage][`${e[2].toLowerCase()}`]}></img></div>
      <div className='nameCap'>{e[0]}</div>
      <div className='seriesCap'>{e[1]}</div>
      </div>

      )}
  </div>

  )
}

export default Findbar