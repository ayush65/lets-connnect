import React from 'react'
import {deleteDoc, doc} from "firebase/firestore"
import db  from "../firebase"

function Followed({description , value}) {
    const handleDelete = async (idle) => {
        const docRef = doc(db, "follow", idle);
        await deleteDoc(docRef);
    
      };
  return (
    <div>{description} <button onClick={() => handleDelete(value)}>Unfollow</button></div>
  )
}

export default Followed