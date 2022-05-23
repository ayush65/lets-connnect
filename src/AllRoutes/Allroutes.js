import React from 'react'
import {
  Routes,
  Route
} from "react-router-dom";
import Homepage from '../Homepage/Homepage';
import Liked from '../Liked/Liked';
import Login from "../Login/Login"
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';



function Allroutes() {
    const user = useSelector(selectUser);

  return (
    <div>
        <Routes>
      <Route path="/likedposts" element={ <Liked />}></Route> 
      <Route path="/" element={ !user ? (
          <Login />
        )  : (
     <Homepage />
        )}></Route>
      
    </Routes>
    </div>
  )
}

export default Allroutes