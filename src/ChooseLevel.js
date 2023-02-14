import React, { useEffect, useState } from "react";
import coll1 from "./assets/coll1.jpg";
import coll2 from "./assets/coll2.jpg";
import coll3 from "./assets/coll3.jpg";
import coll4 from "./assets/coll4.jpg";
import DifficultyInfo from "./DifficultyInfo";
import "animate.css";

import { app } from "./firebase/firebase";
import {
  getFirestore,
  getDocs,
  collection,
} from "firebase/firestore";

const db = getFirestore(app);

function ChooseLevel({ setChoosing, choosing,stage, setStage,difficultyInfo,setDifficultyInfo }) {
  const [wheelNum, setWheelNum] = useState(0);
  const [hideDiv, setHideDiv] = useState(true);

  const imageArray = [coll1, coll2, coll3, coll4];
  const imageInfo = [
    ["coll1", "Collage 1"],
    ["coll2", "Collage 2"],
    ["coll3", "Collage 3"],
    ["coll4", "Collage 4"],
  ];

  const btnClickHandler = (dir) => {
    if (dir === "r") {
      wheelNum === imageArray.length - 1
        ? setWheelNum(0)
        : setWheelNum(wheelNum + 1);
    } else {
      wheelNum === 0
        ? setWheelNum(imageArray.length - 1)
        : setWheelNum(wheelNum - 1);
    }

    setDifficultyInfo([]);
    setHideDiv(true);
  };

  useEffect(()=>{
    setStage(imageInfo[wheelNum][0])
    console.log(`stage set to ${imageInfo[wheelNum][0]}`)
      },[wheelNum])

  async function getInfo() {
    let myInfo = [];
    const query = await getDocs(collection(db, imageInfo[wheelNum][0]));
    query.forEach((d) => {
      if (d.data().difficulty == "easy") {
        myInfo[0] = [d.data().name, d.data().series, "Easy"];
      }
      if (d.data().difficulty == "medium") {
        myInfo[1] = [d.data().name, d.data().series, "Medium"];
      }
      if (d.data().difficulty == "hard") {
        myInfo[2] = [d.data().name, d.data().series, "Hard"];
      }
    });
    setDifficultyInfo(myInfo);
  }

  return (
    <div
      style={choosing ? { display: "flex" } : { display: "none" }}
      className="chooselvldiv"
    >
      <div className="imageWheel">
        <div className="imageContainer">
          <div className="imgInContainer">
            {" "}
            <img src={imageArray[wheelNum]}></img>
          </div>
          <div className="imageToFind">
            <DifficultyInfo
              hideDiv={hideDiv}
              setHideDiv={setHideDiv}
              getInfo={getInfo}
              difficultyInfo={difficultyInfo}
              choosing={choosing}
              setChoosing={setChoosing}
              wheelNum={wheelNum}
              imageInfo={imageInfo}
              stage = {stage}
            />
          </div>
        </div>
        <div className="imageTitle">
          <div onClick={getInfo} className="Start Game">
            {imageInfo[wheelNum][1]}
          </div>
        </div>
        <div className="wheelButtons">
          <div
            className="scrollBtns"
            onClick={() => {
              btnClickHandler("l");
            }}
          >
            Scroll Left
          </div>
          <div
            className="scrollBtns"
            onClick={() => {
              btnClickHandler("r");
            }}
          >
            Scroll Right
          </div>
        </div>
      </div>
    </div>
  );
}
//TODO -- BUTTON THAT SETS THE STAGE TO THE CURRENT COLL and ALSO STARTS THE GAME

export default ChooseLevel;
