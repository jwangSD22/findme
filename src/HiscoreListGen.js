import React from 'react'
import { useState,useEffect } from 'react';
import timeToString from './timeToString';


function HiscoreListGen({hiscoreList,name}) {

const [index,setIndex] = useState(null)
const places = ['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th']

const placesMap = () => places.map(
  (e)=><div className='places'>{e}</div>
)

const top10 = hiscoreList.slice(0,10)
const top10map = ()=> top10.map((e=>
  <div className="hiscoreList">
    <div className="hiscoreName">{e.name}</div>
    <div className="hiscoreTime">{timeToString(e.time)}</div>
  </div>))

useEffect(()=>{
  const findIndex = hiscoreList.findIndex((e)=>e.name===name)
  setIndex(findIndex)
  
},[name,hiscoreList])

const placeDisplay = () => {
  if(index===0){return `1ST PLACE : ${name}`}
  if(index===1){return `2ND PLACE : ${name}`}
  if(index===2){return `3RD PLACE : ${name}`}

  else{return `${index+1}TH PLACE : ${name}`}
}


  return  <><div className='showList'>
  <div className='places'>{placesMap()}</div>
  <div className='top10'>{top10map()}</div>
</div>
<div className='dots'><span>.</span><span>.</span><span>.</span></div>
<div className='yourPlace' >{placeDisplay()}</div></>
}

export default HiscoreListGen