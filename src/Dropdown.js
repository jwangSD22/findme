import React, { useEffect } from "react";
import { app } from "./firebase/firebase";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
const db = getFirestore(app);

function Dropdown({
  setTimeRunning,
  setToFind,
  difficultyInfo,
  toFind,
  stage,
  showDrop,
  mouse,
  setShowDrop,
  setWinStatus,
}) {
  const header = document.getElementsByClassName("header")[0];

  const clickHandler = async (param) => {
    const docRef = doc(db, stage, param);
    const docSnap = await getDoc(docRef);
    //mouse variable contains the offset coordinates of what you clicked on
    const imageWidth =
      document.getElementsByClassName("gameStage")[0].offsetWidth;
    const imageHeight =
      document.getElementsByClassName("gameStage")[0].offsetHeight;
    const leftBound = docSnap.data().coord.xLeft;
    const rightBound = docSnap.data().coord.xRight;
    const topBound = docSnap.data().coord.yTop;
    const bottomBound = docSnap.data().coord.yBottom;
    const xRef = mouse.x / imageWidth;
    const yRef = mouse.y / imageHeight;

    if (
      xRef > leftBound &&
      xRef < rightBound &&
      yRef > topBound &&
      yRef < bottomBound
    ) {
      header.setAttribute("style", "animation: blinkHit .02s step-end 18");
      setTimeout(() => {
        header.setAttribute("style", "animation: none");
      }, 250);
      setToFind({ ...toFind, [param]: false });
    } else {
      header.setAttribute("style", "animation: blinkMiss .02s step-end 18");
      setTimeout(() => {
        header.setAttribute("style", "animation: none");
      }, 250);
    }
    setShowDrop(!showDrop);
  };

  useEffect(() => {
    checkWin();
  }, [toFind]);

  //check win condition only if toFind has been updated

  const checkWin = () => {
    let counter = 0;
    for (const key in toFind) {
      if (toFind[key] === false) {
        counter += 1;
      }
    }
    if (counter === 3) {
      setWinStatus(true);
      setTimeRunning(false);
    }
  };

  const divMaker = (difficulty, index) => (
    <div
      onClick={() => {
        clickHandler(difficulty);
      }}
      className={`innerChoice`}
    >
      {difficultyInfo.length > 0 ? difficultyInfo[index][0] : null}
    </div>
  );
  //produces each div specifically for each difficulty specification in the dropdown menu

  return (
    <div style={showDrop ? null : { display: "none" }} className="dropdownBox">
      {toFind.easy === true ? divMaker("easy", 0) : null}
      {toFind.medium === true ? divMaker("medium", 1) : null}
      {toFind.hard === true ? divMaker("hard", 2) : null}
    </div>
  );
}

export default Dropdown;
