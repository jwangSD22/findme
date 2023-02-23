import React from 'react'
import {useState} from 'react'
import HiscoreShow from './HiscoreShow'
import HiscoreSubmit from './HiscoreSubmit'
import { getFirestore,doc,getDoc} from "firebase/firestore";
import { app } from "./firebase/firebase";



function Hiscores({setWinStatus,setTimer,setChoosing,setToFind,stage,winStatus,timer}) {

const [submitted,setSubmitted] = useState(false)
const [hiscoreList,setHiscoreList] = useState([])
const [title, setTitle] = useState('')
const [name,setName] = useState('')

const db = getFirestore(app)

const getAsyncScore = async () => {
  const query = await getDoc(doc(db,stage,'info'))
  const query2 = await getDoc(doc(db,stage,'title'))
  const hiscores = [...query.data()['hiscores']]
  setHiscoreList(hiscores)
  setTitle(query2.data()['title'])
      }


  return (
    <div className='hiscores' style={winStatus!==true?{display:'none'}:null}>
{
  winStatus?
  <>  <HiscoreSubmit setName = {setName} name={name} getAsyncScore = {getAsyncScore} stage={stage} setSubmitted={setSubmitted} submitted={submitted} timer={timer} />
  <HiscoreShow setName = {setName} name={name} hiscoreList = {hiscoreList} title = {title} setSubmitted={setSubmitted}setWinStatus={setWinStatus} setTimer={setTimer} setChoosing={setChoosing} setToFind={setToFind}submitted={submitted}/></>:null

}





    </div>
  )
}

export default Hiscores