import React, {useState} from 'react'
import 'animate.css'

function StartButton({setChoosing}) {
const [hover,setHover] = useState(false)

const clickHandler= () => {
    setChoosing(false)
}

  return (
    <div className={hover?"bottomBarStart animate__animated animate__flash ":"bottomBarStart" }
    onClick={clickHandler}
    onMouseEnter={()=>setHover(true)} 
    onMouseLeave={()=>{setHover(false)}}
    >START
    </div>
  )
}

export default StartButton