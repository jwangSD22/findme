import React, {useState,useEffect } from 'react'

import Dropdown from './Dropdown';
import data from './data'

function FindmePage({setTimeRunning,difficultyInfo, choosing,stage,toFind, setToFind,timer,setTimer,setWinStatus}) {
  const [mouse,setMouse] = useState({x:0,y:0})
  const [showDrop, setShowDrop] = useState(false)
  const header = document.querySelector('.header')
  const findbar = document.querySelector('.findBar')
  const image = document.querySelector(`.gameStage.${stage}`)
  const window = document.querySelector('.gameWindow')

  const calcOffSet = () => {
    if(header&&findbar){
      return {
        top: header.offsetHeight + findbar.offsetHeight + mouse.y,
        left: (window.offsetWidth - image.offsetWidth)/2 + mouse.x
    }
    }
    return {top:0,left:0}
      
  }
  

const setBox = () => {
  const dropdownBox = document.querySelector('.dropdownBox')
  dropdownBox.setAttribute('style',`left:${calcOffSet().left}px;top:${calcOffSet().top}px`) 
}

useEffect(()=> {
  showDrop?setBox():console.log('none')
},[mouse])


const clickHandler = (e) => {

const mouseCoord = e.nativeEvent
setMouse({x:mouseCoord.offsetX,y:mouseCoord.offsetY})
setShowDrop(!showDrop)




}




  return (
    <> 
    <div style={choosing?{display:'none'}:{display:'flex'}}className='findMePage'>
    <img onClick={(e)=>clickHandler(e)} className={`gameStage ${stage}`}src={data[stage].src}></img>
    
  </div>
  <Dropdown setTimeRunning={setTimeRunning} setToFind={setToFind} setShowDrop={setShowDrop} difficultyInfo = {difficultyInfo} toFind={toFind}  mouse={mouse} showDrop={showDrop} stage={stage} timer={timer} setTimer={setTimer} setWinStatus={setWinStatus}/>
  </>

  )
   







}

export default FindmePage