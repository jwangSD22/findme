import React from "react";
import coll1 from './assets/coll1.jpg'
import coll2 from './assets/coll2.jpg'
import coll3 from './assets/coll3.jpg'
import coll4 from './assets/coll4.jpg'
import { useState,useEffect } from "react";
import { app } from "./firebase/firebase";
import { getFirestore,doc,setDoc,collection,getDocs,getDoc, query} from "firebase/firestore";

//insert current image here //
const currentImage = coll2
const currentImageText = 'coll2'
//insert current image here


function DeveloperTools() {
  const [mouse,setMouse] = useState({x:0,y:0})
  const [coord,setCoord] = useState({x:0,y:0})

  const [border,setBorder] = useState({
    leftX:0,
    rightX:0,
    topY:0,
    bottomY:0
  })
  const mouseEventHandler = (e) => {
    setMouse({x:e.nativeEvent.offsetX,y:e.nativeEvent.offsetY}) 
    return [e.nativeEvent.offsetX,e.nativeEvent.offsetY]
  }

  const collectCoord = (e) => {
    setCoord({x:e.nativeEvent.offsetX,y:e.nativeEvent.offsetY}) 

  }
  
  const genPoint = (param,ori) => {
    setBorder({...border,[param]:coord[ori]})
    return border.param
  }


  const myImage = document.getElementsByClassName('myImg')



  const generateRelative = ()=>{

    const coords = {
      xLeft:(border.leftX/myImage[0].offsetWidth),
      xRight:(border.rightX/myImage[0].offsetWidth),
      yTop:(border.topY/myImage[0].offsetHeight),
      yBottom:(border.bottomY/myImage[0].offsetHeight)
    }
    console.log(coords)
    const myJSON = JSON.stringify(coords)
    const div = document.querySelectorAll('.relCoords')
    div[0].innerText = myJSON
    return coords
  }



const appendBox = () => { 
    const myImage = document.getElementsByClassName('myImg')
    const mouseBar = document.getElementsByClassName('mouseData')[0]
    const coords = {
        xLeft:(border.leftX/myImage[0].offsetWidth),
        xRight:(border.rightX/myImage[0].offsetWidth),
        yTop:(border.topY/myImage[0].offsetHeight),
        yBottom:(border.bottomY/myImage[0].offsetHeight)
      }


    const width = (coords.xRight-coords.xLeft)*myImage[0].offsetWidth
    const height =(coords.yBottom-coords.yTop)*myImage[0].offsetHeight
    const posTop = (mouseBar.offsetHeight+coords.yTop*myImage[0].offsetHeight)
    const posLeft = (coords.xLeft*myImage[0].offsetWidth)
    const myDiv = document.createElement('div')   
    myDiv.className = 'myBox'
    myDiv.style.width = `${width}px`
    myDiv.style.height = `${height}px`
    myDiv.style.position = 'absolute'
    myDiv.style.top = `${posTop}px`
    myDiv.style.left = `${posLeft}px`
  const parent = document.getElementsByClassName('App')[0]
  parent.appendChild(myDiv)
 
  }

const db = getFirestore(app)

const handleSubmit = async (e) => {
    e.preventDefault()
    const title = e.target[0].value
    const character = e.target[1].value
    const series = e.target[2].value
    const difficulty = e.target[3].value
    const coord = generateRelative()


    await setDoc(
        doc(db,currentImageText,difficulty),{
           
                'name':[character],
                'difficulty':[difficulty],
                'series':[series],
                'coord':coord
            
        }
    )

    await setDoc(
      doc(db,currentImageText,'info'),{
          'title':title
          }
      
  )

    



}

const imageInfo = async (difficulty) => {
const dbRef = doc(db,currentImageText,difficulty)
const querySnapshot = await getDoc(dbRef)
console.log(querySnapshot.data()[difficulty].coord)


}






  return (
    <div className="App">
      <div className = 'mouseData'>mouse coords : {mouse.x},{mouse.y}   :: static: X:{coord.x}, Y:{coord.y}</div>
      

   
<img className ='myImg' src={currentImage} onClick={(e)=>{collectCoord(e)}} onMouseMove={(e)=>{mouseEventHandler(e)}}></img>
<div className="bottomMenu">
    <div>
      <br />
      <button onClick={()=>{genPoint('leftX','x')}}>Set Coord</button>leftX: {border.leftX}
      <br />
      <button onClick={()=>{genPoint('rightX','x')}}>Set Coord</button>rightX:{border.rightX}
      <br />
      <button onClick={()=>{genPoint('topY','y')}}>Set Coord</button>topY: {border.topY}
      <br />
      <button onClick={()=>{genPoint('bottomY','y')}}>Set Coord</button>bottomY: {border.bottomY}
      <br />
      <button onClick={generateRelative}> Generate relative coordinates</button> <div className ='relCoords'></div>
      <br />
      <button onClick={appendBox}>Generate box based on relative coordinates</button>
      <br/>
      <form onSubmit={(e)=>(handleSubmit(e))}>
        <label>title</label>
        <input type="text" className='title'></input>
        <label>character</label>
        <input type="text"></input>
        <label>series</label>
        <input type="series"></input>
        <label>difficulty</label>
        <input type="text"></input>
        <input type="submit"></input>
      </form>
      </div>
      <div><button onClick={(e)=>imageInfo(e.target.value)} value='hard'>Query Info on image</button></div>
      </div>
 
    </div>



  );
}






export default DeveloperTools;
