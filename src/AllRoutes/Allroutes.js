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
import Bookmark from '../Bookmark/Bookmark';
import Comment from '../Comment/Comment';
import User from '../User/User';



function Allroutes() {
    const user = useSelector(selectUser);

  return (
    <div>
        <Routes>
        <Route path="/user" element={  !user ? (
          <Login />
        ): (
          <User />
        )}></Route>
        <Route path="/comments" element={  !user ? (
          <Login />
        ): (
          <Comment />
        )}></Route>
      <Route path="/bookmark" element={  !user ? (
          <Login />
        ): (
          <Bookmark />
        )}></Route> 
      <Route path="/likedposts" element={ 
        !user ? (
          <Login />
        ): (
          <Liked />
        )
      }></Route> 
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