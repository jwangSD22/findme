import React from 'react'
import {useState} from 'react'
import HiscoreShow from './HiscoreShow'
import HiscoreSubmit from './HiscoreSubmit'

function Hiscores({stage,winStatus,timer}) {
  const [submitted,setSubmitted] = useState(false)

  return (
    <div className='hiscores' style={winStatus!==true?{display:'none'}:null}>
{
  winStatus?
  <HiscoreSubmit stage={stage} setSubmitted={setSubmitted} submitted={submitted} timer={timer} />:
  <HiscoreShow setSubmitted={setSubmitted} submitted={submitted}/>
}





    </div>
  )
}

export default Hiscores