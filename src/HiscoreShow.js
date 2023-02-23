import React  from 'react'
import {useEffect} from 'react'
import HiscoreListGen from './HiscoreListGen';

function HiscoreShow({hiscoreList,title,setSubmitted,setWinStatus,setTimer,setToFind,setChoosing,submitted}) {


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
}


  return (
    <div className='hiscoreShow' style={submitted?null:{display:'none'}}>
        <div>Stage: {title}</div>
        <div>high scores:</div>
        <div><HiscoreListGen hiscoreList={hiscoreList} />        
          </div>
        <div onClick={newGameHandler}>NEW GAME BUTTON</div>
    </div>
  )
}

export default HiscoreShow