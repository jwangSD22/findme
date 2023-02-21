import React from 'react'
import {useState} from 'react'
import HiscoreShow from './HiscoreShow'
import HiscoreSubmit from './HiscoreSubmit'

function Hiscores({setWinStatus,setTimer,setChoosing,setToFind,stage,winStatus,timer}) {
  const [submitted,setSubmitted] = useState(false)

  return (
    <div className='hiscores' style={winStatus!==true?{display:'none'}:null}>
{
  winStatus?
  <>  <HiscoreSubmit stage={stage} setSubmitted={setSubmitted} submitted={submitted} timer={timer} />
  <HiscoreShow setSubmitted={setSubmitted}setWinStatus={setWinStatus} setTimer={setTimer} setChoosing={setChoosing} setToFind={setToFind} stage={stage} setSubmitted={setSubmitted} submitted={submitted}/></>:null

}





    </div>
  )
}

export default Hiscores