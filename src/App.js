import React, { useState,useEffect } from "react";
import Header from "./Header";
import Findbar from "./Findbar";
import ChooseLevel from "./ChooseLevel";
import FindmePage from "./FindmePage";
import Hiscores from "./Hiscores";
import Footer from "./Footer";

function App() {
  const [stage, setStage] = useState('coll1');
  const [difficultyInfo, setDifficultyInfo] = useState([]);
  const [choosing, setChoosing] = useState(true);
  const [toFind, setToFind] = useState({
    'easy':true,
    'medium':true,
    'hard':true
  })

  const [winStatus,setWinStatus] = useState(null)
  const [timer, setTimer] = useState(0)
  const [timeRunning,setTimeRunning] = useState(false)

  useEffect(()=>{
let interval
    if(timeRunning){
interval = setInterval(()=>{
  setTimer((e)=>e+10)
},10)
  
    }
    else if (!timeRunning){
      clearInterval(interval)
    }
    return () => clearInterval(interval)
    }

 
  ,[timeRunning])


  return (
    <div className="app">
      <Header winStatus={winStatus} toFind={toFind} timer={timer} timeRunning={timeRunning}/>
      <Findbar toFind={toFind} choosing={choosing} stage={stage} difficultyInfo={difficultyInfo}/>
      <div className="gameWindow">
        <ChooseLevel setTimeRunning={setTimeRunning} setWinStatus={setWinStatus} stage ={stage} setChoosing={setChoosing} setStage={setStage} choosing={choosing} difficultyInfo={difficultyInfo} setDifficultyInfo = {setDifficultyInfo} />
        <FindmePage setTimeRunning={setTimeRunning}difficultyInfo={difficultyInfo} toFind={toFind} setToFind={setToFind} stage={stage} choosing={choosing} timer={timer} setTimer={setTimer} setWinStatus={setWinStatus}/>
        <Hiscores stage={stage} winStatus = {winStatus} setWinStatus={setWinStatus} choosing={choosing} setChoosing={setChoosing} timer={timer} setTimer={setTimer}/>
      </div>

      <Footer />
    </div>
  );
}

export default App;
