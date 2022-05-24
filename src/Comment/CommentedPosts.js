import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import "../Homepage/Posts/Posts"
import "../Liked/Likedposts.css"
import {onSnapshot , collection, doc, setDoc , deleteDoc } from "firebase/firestore"
import uuid from 'react-uuid'
import "../Homepage/Feed/Feed.css"
import Commentpost from './Commentpost';

import db  from "../firebase"

function CommentedPosts({value ,name , description , message }) {
    const handleDeleteBookmarkedPosts = async (idle) => {
        const docRef = doc(db, "commented", idle);
        await deleteDoc(docRef);
      };

    const [commentpost , setComment] = useState([]);
    const [input , setInput] = useState('');

    useEffect(() => {
        onSnapshot(collection(db, "comment"), (snapshot) => {
                console.log(snapshot.docs)
                setComment(snapshot.docs.map((doc) => ({
                        
                          id: doc.id,
                          data: doc.data(),
                        })))
               })    
            },[]);

    const sendpost = async (e)  =>  {
                e.preventDefault();
                const docRef = doc(db , "comment", uuid());
                const payload = {
                    message: input ,} ;
                await setDoc(docRef , payload);
               setInput('');
    };        
  return (
    <div className="comment-post">
    <div className="posts-alignment">
    <div className="liked-post-container">
    <div  className=" liked-posts">
    <div className="post__headr ">
            <Avatar />
            <div className="post__info">
            <h2 >{name}</h2>
            <p>{description}</p>
            <div className="post__buttons">
<div className="inputoptions" onClick={() => handleDeleteBookmarkedPosts(value)}>
  <DeleteIcon className='icon-color'/>
   <h4>Delete</h4>   
</div>
</div>
            

            </div>
            </div>

<div className="post_body">

<p>{message}</p>
</div>                    
</div>
</div>
</div>
<div className="feed_inputcontainer" >
   <div className="feed_input" >
             <form>
             <input  value={ input } placeholder="write the comment here and enter for posting" onChange={e => setInput(e.target.value)}  type="text" />
                       <button onClick={sendpost} type="submit">Send</button>
             </form>
             </div>
             </div>
             
             {commentpost.map(({ id , data : { message , value}})  =>  (
                           
                           <Commentpost
                           key={id}
                           value={id}
                           message={message}/>
                 ))}
</div>
  )
}

export default CommentedPosts