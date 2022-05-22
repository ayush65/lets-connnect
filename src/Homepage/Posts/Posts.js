import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import ChatIcon from '@mui/icons-material/Chat';
import EditIcon from '@mui/icons-material/Edit';
import Avatar from '@mui/material/Avatar';
import "./Posts.css"

import {
  doc,
  deleteDoc,
  setDoc
} from "firebase/firestore";

import db  from "../../firebase"

function Posts({value, name , description , message }) {

  const handleDelete = async (idle) => {
    const docRef = doc(db, "posts", idle);
    await deleteDoc(docRef);
  };

  
  const handleEdit = async (id) => {
  const message = prompt("Enter post mesage") ;

  if(message.length === 0) {
    message = "";
  }

  

  const docRef = doc(db, "posts", id);
  const payload = { name, description , message };

  setDoc(docRef, payload);
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

    <div className="post_body">

        <p>{message}</p>
    </div>

    <div className="post__buttons">
      <div className="inputoptions">
          <ThumbUpIcon className='icon-color'/>
           <h4>like</h4>   
      </div>
      <div className="inputoptions">
          <ChatIcon className='icon-color'/>
           <h4>comment</h4>   
      </div>
      <div className="inputoptions" onClick={() => handleEdit(value)}>
          <EditIcon className='icon-color'/>
           <h4>Edit</h4>   
      </div>
      <div className="inputoptions" onClick={() => handleDelete(value)}>
          <DeleteIcon className='icon-color'/>
           <h4>Delete</h4>   
      </div>
    </div>
                              
    </div>
  )
}

export default Posts