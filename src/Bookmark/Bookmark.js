import React, { useEffect, useState } from 'react'
import {onSnapshot , collection} from "firebase/firestore"
import db  from "../firebase"
import LikedPosts from '../Liked/Likedposts.css';
import BookmarkPosts from './BookmarkPosts'

function Bookmark() {
    const [likedposts , setLikedPosts] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, "bookmark"), (snapshot) => {
             console.log(snapshot.docs)
             setLikedPosts(snapshot.docs.map((doc) => ({
                     
                       id: doc.id,
                       data: doc.data(),
                     })))
            })
            },[]);

            console.log(likedposts);

  return (
    <div>
                {likedposts.map(({ id , data : { name , description , message , photoUrl}})  =>  (
                                       
                                       <BookmarkPosts
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

export default Bookmark