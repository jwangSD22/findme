import React  from 'react'
import {useState, useEffect} from 'react'
import HiscoreListGen from './HiscoreListGen';
import 'animate.css'

function HiscoreShow({name,setName,hiscoreList,title,setSubmitted,setWinStatus,setTimer,setToFind,setChoosing,submitted}) {
const [hover,setHover] = useState(false)

  useEffect(()=>{
  },[hiscoreList])


const newGameHandler = () => {
setTimer(0)
setToFind(
  {
    'easy':true,
    'medium':true,
    'hard':true
  }
)
setChoosing(true)
setWinStatus(null)
setSubmitted(false)
setName('')
}


  return (
    <div className='hiscoreShow' style={submitted?null:{display:'none'}}>
        <div className='showStage'>Stage: {title}</div>
        <div className='showStage T'>TOP 10</div>
        <HiscoreListGen name={name} hiscoreList={hiscoreList} />        
        
        <div             onMouseEnter={()=>setHover(true)} 
            onMouseLeave={()=>{setHover(false)}} className={hover?"submitBtn animate__animated animate__pulse ":"submitBtn" } onClick={newGameHandler}>NEW GAME BUTTON</div>
    </div>
  )
}

export default HiscoreShow