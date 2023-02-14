import React, {useState,useEffect } from 'react'

import Dropdown from './Dropdown';
import data from './data'

function FindmePage({difficultyInfo, choosing,stage,toFind, setToFind}) {
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
  <Dropdown setToFind={setToFind} setShowDrop={setShowDrop} difficultyInfo = {difficultyInfo} toFind={toFind} setToFind={setToFind} mouse={mouse} showDrop={showDrop} stage={stage} />
  </>

  )
   
// todo

// choosing an item within the dropdown menu component will trigger an async function to check backend to see
// if coordinate matches the correct position of what is being targeted 

// each time one of the selected characters have been found, must go back to findbar to show that it has been found

// set victory conditions when all three are matched






}

export default FindmePage