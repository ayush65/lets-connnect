import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import "../Homepage/Posts/Posts"
import "../Liked/Likedposts.css"
import {
  doc,
  deleteDoc
} from "firebase/firestore";

import db  from "../firebase"


function BookmarkPosts({value, name , description , message }) {
    const handleDeleteBookmarkedPosts = async (idle) => {
        const docRef = doc(db, "bookmark", idle);
        await deleteDoc(docRef);
      };


  return (
    <div className="posts-alignment">
    <div className="liked-post-container">
    <div  className=" liked-posts">
    <div className="post__headr ">
            <Avatar />
            <div className="post__info">
            <h2 >{name}</h2>
            <p>{description}</p>
            

            </div>
            </div>

<div className="post_body">

<p>{message}</p>
</div>

<div className="post__buttons">
<div className="inputoptions" onClick={() => handleDeleteBookmarkedPosts(value)}>
  <DeleteIcon className='icon-color'/>
   <h4>Delete</h4>   
</div>
</div>
                      
</div>
</div>
</div>
  )
}

export default BookmarkPosts