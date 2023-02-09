import React from 'react'

function Findbar({choosing,difficultyInfo}) {

const handleClick = () => {
}

  

  console.log(difficultyInfo)
  return (<div className='findBar'>
    
    {choosing?<h1>BOOTY</h1>:difficultyInfo.map((e)=>
      
      <div className='difficultyInfo'>
        <div className={`difficulty ${e[2]}`}>{e[2]}</div>
        <div className='imgThumb'>IMAGE GOES HERE</div>
      <div className='nameCap'>{e[0]}</div>
      <div className='seriesCap'>{e[1]}</div>
      </div>)}
  </div>

  )
}

export default Findbar