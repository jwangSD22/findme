import React from 'react'
import {HashRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import DeveloperTools from './DeveloperTools'


function RouteSwitch() {
  return (
<HashRouter>
    <Routes>
        
        <Route path="/developer" element = {<DeveloperTools/>}/>
        <Route path="/" element = {<App />} />
    </Routes>
</HashRouter>


  )
}

export default RouteSwitch