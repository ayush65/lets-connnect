import React, { useEffect, useState } from 'react'
import {onSnapshot , collection} from "firebase/firestore"
import db  from "../firebase"
import UsersCard from './UsersCard';

function User() {

    const [users , setUsers] = useState([]);
    
    useEffect(() => {
        onSnapshot(collection(db, "user"), (snapshot) => {
             console.log(snapshot.docs)
             setUsers(snapshot.docs.map((doc) => ({
                     
                       id: doc.id,
                       data: doc.data(),
                     })))
            })
            },[]);

            console.log(users)


  return (
    <div>
        <div  className="sidebar sidebar-placement">

<div className="sidebar__top">

                {users.map(({ id , data : { name , Bio ,photoUrl , portfolioUrl}})  =>  (
                                       
                                       <UsersCard
                                       id={id}
                                       name={name}
                                       value={id}
                                       Bio={Bio}
                                       portfolioUrl={portfolioUrl}
                                       photoUrl={photoUrl}/>
                             ))}


</div>
</div>
    </div>
  )
}

export default User