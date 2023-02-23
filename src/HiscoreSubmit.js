import  React from 'react'
import {useState, useEffect} from 'react'
import { app } from "./firebase/firebase";
import { getFirestore,doc,setDoc,getDoc } from "firebase/firestore";
import timeToString from './timeToString';


function HiscoreSubmit({getAsyncScore,stage,timer,submitted,setSubmitted}) {
const db = getFirestore(app)
const [name, setName] = useState('')
const [hover,setHover] = useState(false)

const submitAsyncScore = async () => {
const query = await getDoc(doc(db,stage,'info'))

const hiscores = [...query.data()['hiscores'],{
    'name':name,
    'time':timer
}]

hiscores.sort((a,b)=>a['time']-b['time'])
    await setDoc(doc(db,stage,'info'),{
        'hiscores': hiscores

   
    })
}

//async submission of data to hiscore list and sorts the score in order

    
const onChange = (e) => {
setName(e.target.value)
}
//changes value on input box

const clickHandler = () => {

    if(name.length>0){
        submitAsyncScore()
        setSubmitted(true)
        setName('')
    }
    else{alert('Please enter a name...')}
}
//submits async data to hiscorelist


useEffect(() => {
    setTimeout(()=>{getAsyncScore();
        console.log('getting async score')
        },1000)
}, [submitted])
//after submission, waits for async score to be submitted before fetching data 



  return (
    <div className='hiscoreSubmit' style = {submitted?{display:'none'}:null}>
        <div className='hiscoreTime'><h1>{timeToString(timer)}</h1></div>
        <div><h1>PLEASE ENTER YOUR NAME</h1></div>
        <div><input className='myInput' type='text' value={name} onChange={(e)=>{onChange(e)}}/></div>
        <br/>
        <br/>
        <div className={hover?"submitBtn animate__animated animate__pulse ":"submitBtn" } onClick={clickHandler}
            onMouseEnter={()=>setHover(true)} 
            onMouseLeave={()=>{setHover(false)}}
            >Submit</div>
    </div>
  )
}

export default HiscoreSubmit