import React, { useState } from "react";
import { Link } from "react-router-dom";
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


  return (
    <div className="app">
      <Header winStatus={winStatus} toFind={toFind} winStatus={winStatus} />
      <Findbar toFind={toFind} choosing={choosing} stage={stage} difficultyInfo={difficultyInfo}/>
      <div className="gameWindow">
        <ChooseLevel stage ={stage} setChoosing={setChoosing} setStage={setStage} choosing={choosing} difficultyInfo={difficultyInfo} setDifficultyInfo = {setDifficultyInfo} />
        <FindmePage difficultyInfo={difficultyInfo} toFind={toFind} setToFind={setToFind} stage={stage} choosing={choosing} />
        {/* <Hiscores winStatus = {winStatus} setWinStatus={setWinStatus} choosing={choosing} setChoosing={setChoosing} /> */}
      </div>

      <Footer />
    </div>
  );
}

export default App;
