import React from 'react'

function DifficultyInfo({getInfo,difficultyInfo,hideDiv,setHideDiv,setChoosing,wheelNum,imageInfo}) {


const clickHandler = () => {
  setHideDiv(false)
  getInfo()
  setChoosing(false)
  console.log(difficultyInfo)
}


  return (

  hideDiv?<button onClick={clickHandler} style={hideDiv?{}:{display:'none'}}>CLICK ME </button>:
    difficultyInfo.map((e)=>
      
    <div className='difficultyInfo'>
      <div className={`difficulty ${e[2]}`}>{e[2]}</div>
      <div className='imgThumb'>IMAGE GOES HERE</div>
    <div className='nameCap'>{e[0]}</div>
    <div className='seriesCap'>{e[1]}</div>
    </div>
  )
  )
}

export default DifficultyInfo