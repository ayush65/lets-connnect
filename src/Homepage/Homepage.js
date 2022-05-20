import React from 'react'
import Sidebar from './Sidebar/Sidebar';
import "./Homepage.css"
import Feed from '../Homepage/Feed/Feed'
import Widgits from './Widgits/Widgits';

function Homepage() {
  
  return (
    <div>
    <div className="linked__body">
        <Sidebar />
        <Feed /> 
        <Widgits />
    </div>
    </div>
  )
}

export default Homepage