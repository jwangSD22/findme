import React from 'react'
import data from './data'


function DifficultyInfo({getInfo,difficultyInfo,hideDiv,setHideDiv,setChoosing,wheelNum,imageInfo,stage}) {


const clickHandler = () => {
  setHideDiv(false)
  getInfo()
  setChoosing(false)
}


  return (
    
  hideDiv?<button onClick={clickHandler} style={hideDiv?{}:{display:'none'}}> Click me</button>:
    difficultyInfo.map((e)=>
      
    <div className='difficultyInfo'>
      <div className={`difficulty ${e[2]}`}>{e[2]} {console.log(e)}</div>
      <div className='imgThumb'>
        <img src={data[stage][`${e[2].toLowerCase()}`]}></img></div>
    <div className='nameCap'>{e[0]}</div>
    <div className='seriesCap'>{e[1]}</div>
    </div>
  )
  )
}

export default DifficultyInfo