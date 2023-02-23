import React from 'react'
import { useEffect } from 'react';
import timeToString from './timeToString';


function HiscoreListGen({hiscoreList}) {



  return   hiscoreList.map((e=>
    <div className="hiscoreList">
      <div className="hiscoreName">{e.name}</div>
      <div className="hiscoreTime">{timeToString(e.time)}</div>
    </div>))
}

export default HiscoreListGen