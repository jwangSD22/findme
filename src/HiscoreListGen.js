import React from 'react'

function HiscoreListGen({hiscoreList}) {
  return (
    hiscoreList.map((e=>
    <div className="hiscoreList">
      <div className="hiscoreName">{e.name}</div>
      <div className="hiscoreTime">{e.time}</div>
    </div>))
  )
}

export default HiscoreListGen