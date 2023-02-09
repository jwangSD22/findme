import React, { Component } from 'react'
import coll1 from "./assets/coll1.jpg";
import coll2 from "./assets/coll2.jpg";
import coll3 from "./assets/coll3.jpg";
import coll4 from "./assets/coll4.jpg";

function FindmePage({choosing,stage}) {
  return (
    <div style={choosing?{display:'none'}:{display:'flex'}}className='findMePage'>
      <img src={coll1}></img>
    </div>
  )
   
// todo
// create event listenere on the image div that will detect coordinates to create a dropdown menu Component

// choosing an item within the dropdown menu component will trigger an async function to check backend to see
// if coordinate matches the correct position of what is being targeted 

// each time one of the selected characters have been found, must go back to findbar to show that it has been found

// set victory conditions when all three are matched






}

export default FindmePage