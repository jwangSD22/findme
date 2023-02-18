import React  from 'react'
import {useEffect,useState} from 'react'
import { app } from "./firebase/firebase";
import { getFirestore,doc,setDoc,collection,getDocs,getDoc, query} from "firebase/firestore";
import HiscoreListGen from './HiscoreListGen';
function HiscoreShow({stage,submitted}) {
const [hiscoreList,setHiscoreList] = useState([])
const [title, setTitle] = useState('')
const db = getFirestore(app)


const getAsyncScore = async () => {

  const query = await getDoc(doc(db,stage,'info'))
  const query2 = await getDoc(doc(db,stage,'title'))
  const hiscores = [...query.data()['hiscores']]

  setHiscoreList(hiscores)
  setTitle(query2.data()['title'])
      }
  

useEffect(()=>{
  if(submitted){
    getAsyncScore();

  }
},[submitted])



  return (
    <div className='hiscoreShow' style={submitted?null:{display:'none'}}>
        <div>{title}</div>
        <div>high scores:</div>
        <div><HiscoreListGen hiscoreList={hiscoreList} />         
          </div>
        <div>NEW GAME BUTTON</div>
    </div>
  )
}

export default HiscoreShow