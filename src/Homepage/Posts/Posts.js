import React, { useState } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import ChatIcon from '@mui/icons-material/Chat';
import EditIcon from '@mui/icons-material/Edit';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Avatar from '@mui/material/Avatar';
import "./Posts.css"

import {
  doc,
  deleteDoc,
  setDoc
} from "firebase/firestore";

import db  from "../../firebase"
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';

function Posts({value, name , description , message }) {

  const [buttonState , setButtonState] = useState(false);
  const [colorButton , setColor] = useState("");
 const [colorButtonBookmark , setColorBookmark] = useState("");

  const handleDelete = async (idle) => {
    const docRef = doc(db, "posts", idle);
    await deleteDoc(docRef);

  };

  
  const handleEdit = async (id) => {
  const message = prompt("Enter post mesage") ;

  if(message.length > 0) {
    const docRef = doc(db, "posts", id);
    const payload = { name, description , message };
  
    setDoc(docRef, payload);
  }
};

const sendLikedPost = async ()  =>  {
  const docRef = doc(db , "liked", uuid());
  const payload = {
      name: name,
      description: description,
      message: message ,} ;
  await setDoc(docRef , payload); 
  
}; 

const sendCommentedPost = async ()  =>  {
  const docRef = doc(db , "commented", value);
  const payload = {
      name: name,
      description: description,
      message: message ,} ;
  await setDoc(docRef , payload); 
  
}; 

const sendBookmarkPost = async ()  =>  {
  const docRef = doc(db , "bookmark", uuid());
  const payload = {
      name: name,
      description: description,
      message: message ,} ;
  await setDoc(docRef , payload);  
  
};  

const sendFollowedUser = async ()  =>  {
  const docRef = doc(db , "followed", uuid());
  const payload = {
      name: name,
      description: description,} ;
  await setDoc(docRef , payload);  
  
};  
  return (
    <div  className="post">
            <div className="post__headr">
                    <Avatar />
                    <div className="post__info">
                    <h2 >{name}</h2>
                    <p>{description}</p>
                    </div>
                    </div>

                    <button className="btn-follow inputoptions"  disabled={buttonState}  onClick={() =>{  sendFollowedUser() ; setButtonState(true)}}>Follow</button>

    <div className="post_body">

        <p>{message}</p>
    </div>

    <div className="post__buttons">
    <div className="inputoptions" style ={{backgroundColor: colorButton }} onClick={() => setColor(" #B0E0E6")}>
          <button className='btn-disabled-state'  disabled={buttonState} onClick={() =>{ sendLikedPost() ; setButtonState(true) }}><ThumbUpIcon className='icon-color' />
          </button>  
          <button className='btn-disabled-state'  disabled={buttonState} onClick={() =>{ sendLikedPost()  ; setButtonState(true)}}><h4 className='icon-color'>Like</h4></button> 
      </div>
      <Link className="inputoptions" onClick={() => sendCommentedPost()} to="/comments">
          <ChatIcon className='icon-color'/>
           <h4>comment</h4>   
      </Link>
      <div className="inputoptions" onClick={() => handleEdit(value)}>
          <EditIcon className='icon-color'/>
           <h4>Edit</h4>   
      </div>
      <div className="inputoptions" style ={{backgroundColor: colorButtonBookmark}} onClick={() =>setColorBookmark("#B0E0E6")} >
          <button className='btn-disabled-state' disabled={buttonState} onClick={() =>{ sendBookmarkPost() ; setButtonState(true)}}><BookmarkIcon className='icon-color' />
          </button>  
          <button className='btn-disabled-state' disabled={buttonState} onClick={() =>{ sendBookmarkPost() ; setButtonState(true)}}><h4 className='icon-color'>Bookmark</h4></button> 
      </div>
      
      <div className="inputoptions" onClick={() => {handleDelete(value) ; colorButton("") ; colorButtonBookmark("")}}>
          <DeleteIcon className='icon-color'/>
           <h4>Delete</h4>   
      </div>
    </div>
                              
    </div>
  )
}

export default Posts