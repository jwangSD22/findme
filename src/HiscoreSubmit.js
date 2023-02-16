import  React from 'react'
import {useState} from 'react'
import { app } from "./firebase/firebase";
import { getFirestore,doc,setDoc,collection,getDocs,getDoc, query} from "firebase/firestore";


function HiscoreSubmit({stage,timer,submitted,setSubmitted}) {
const db = getFirestore(app)
const [name, setName] = useState('')


const onChange = (e) => {
setName(e.target.value)
}

const clickHandler = () => {
    //this has to be set to true//
    setSubmitted(false)
    submitAsyncScore()
}

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

  return (
    <div className='hiscoreSubmit' style = {submitted?{display:'none'}:null}>
        <div className='hiscoreTime'>{timer}</div>
        <div>PLEASE ENTER YOUR NAME</div>
        <div><input type='text' value={name} onChange={(e)=>{onChange(e)}}/></div>
        
        <div onClick={clickHandler}>Submit Button</div>
    </div>
  )
}

export default HiscoreSubmit