import React, { useEffect, useState } from 'react'
import db  from "../firebase"
import CommentedPosts from './CommentedPosts'
import {onSnapshot , collection} from "firebase/firestore"
import "../Homepage/Feed/Feed.css"

function Comment() {
    const [likedposts , setLikedPosts] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, "commented"), (snapshot) => {
             console.log(snapshot.docs)
             setLikedPosts(snapshot.docs.map((doc) => ({
                     
                       id: doc.id,
                       data: doc.data(),
                     })))
            })
  
            },[]);
               
  return (
    <div>
        
    {likedposts.map(({ id , data : { name , description , message , photoUrl}})  =>  (
                           
                           <CommentedPosts
                           id={id}
                           name={name}
                           value={id}
                           description={description}
                           message={message}
                           photoUrl={photoUrl}/>
                 ))}         
</div>
  )
}

export default Comment