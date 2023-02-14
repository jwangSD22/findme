import { click } from '@testing-library/user-event/dist/click';
import React, {useState,useEffect } from 'react'
import coll1 from "./assets/coll1.jpg";
import coll2 from "./assets/coll2.jpg";
import coll3 from "./assets/coll3.jpg";
import coll4 from "./assets/coll4.jpg";
import Dropdown from './Dropdown';

function FindmePage({choosing,stage,toFind, setToFind}) {
  const [mouse,setMouse] = useState({x:0,y:0})
  const [showDrop, setShowDrop] = useState(false)
  const header = document.querySelector('.header')
  const findbar = document.querySelector('.findBar')
  const image = document.querySelector(`.gameStage.${stage}`)
  const window = document.querySelector('.gameWindow')


  const calcOffSet = () => {
    if(header&&findbar){
      console.log(`this is offset${(window.offsetWidth-image.offsetWidth)/2} mouse is ${mouse.x}`)
      return {
        top: header.offsetHeight + findbar.offsetHeight + mouse.y,
        left: (window.offsetWidth - image.offsetWidth)/2 + mouse.x
    }
    }
    return {top:0,left:0}
      
  }
  



const checkCoord = (clientCoord,serverCoord) => {
  console.log('check pointer against server coord')
}

const setBox = () => {
  const dropdownBox = document.querySelector('.dropdownBox')
  dropdownBox.setAttribute('style',`left:${calcOffSet().left}px;top:${calcOffSet().top}px`) 
  console.log([mouse.x,mouse.y])
}

useEffect(()=> {
  showDrop?setBox():console.log('none')
},[mouse])


const clickHandler = (e) => {

const mouseCoord = e.nativeEvent
console.log(e.nativeEvent.clientX)
setMouse({x:mouseCoord.offsetX,y:mouseCoord.offsetY})
setShowDrop(!showDrop)




}




  return (
    <> 
    <div style={choosing?{display:'none'}:{display:'flex'}}className='findMePage'>
    <img onClick={(e)=>clickHandler(e)} className={`gameStage ${stage}`}src={coll1}></img>
    
  </div>
  <Dropdown toFind={toFind} setToFind={setToFind} mouse={mouse} showDrop={showDrop} stage={stage} />
  </>

  )
   
// todo

// choosing an item within the dropdown menu component will trigger an async function to check backend to see
// if coordinate matches the correct position of what is being targeted 

// each time one of the selected characters have been found, must go back to findbar to show that it has been found

// set victory conditions when all three are matched






}

export default FindmePage