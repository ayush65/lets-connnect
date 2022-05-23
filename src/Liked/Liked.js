import React, { useEffect, useState } from 'react'
import {onSnapshot , collection} from "firebase/firestore"
import db  from "../firebase"
import LikedPosts from './LikedPosts';

function Liked() {

    const [likedposts , setLikedPosts] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, "liked"), (snapshot) => {
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
                                       
                                       <LikedPosts
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

export default Liked