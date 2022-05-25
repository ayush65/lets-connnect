import React, { useEffect, useState } from 'react'
import "../Homepage/Sidebar/Sidebar.css"
import EditIcon from '@mui/icons-material/Edit';
import {onSnapshot , collection, doc, setDoc} from "firebase/firestore"
  import db  from "../firebase"
import Followed from '../Followed/Followed';

function UsersCard({ name , Bio , value , photoUrl , portfolioUrl}) {

    const [user , setUser] = useState([]);
    
    useEffect(() => {
        onSnapshot(collection(db, "follow"), (snapshot) => {
             console.log(snapshot.docs)
             setUser(snapshot.docs.map((doc) => ({
                     
                       id: doc.id,
                       data: doc.data(),
                     })))
            })
            },[]);

            console.log(user)
   
    const handleEdit = async (id) => {
        const name = prompt("Enter post name") ;
        const Bio = prompt("enter the bio of user");
        const photoUrl = prompt("enter the photoUrl");
        const portfolioUrl = prompt("enter portfolio Url")

      
        if(Bio.length > 0 || photoUrl.length > 0 || portfolioUrl.length > 0 || name.length > 0) {
          const docRef = doc(db, "user", id);
          const payload = { Bio, name ,  photoUrl, portfolioUrl };
        
          setDoc(docRef, payload);
        }
      };

  return (
    <div>
         <div className="sidebar-user">
        <img src={photoUrl} className=' avatar-sidebar' alt="dp"></img>
        <h4>Name :- {name}</h4>
        <h4>Bio :- {Bio}</h4>
        <h3>Portfolio Url  :- {portfolioUrl}</h3>
        <EditIcon  className="edit-user" onClick={() => handleEdit(value)}/>
        </div>
        <h2>Following</h2>
        {user.map(({ id , data : {description}})  =>  (
                                       
                                       <Followed
                                       id={id}
                                       value={id}
                                       description={description}/>
                             ))}


        
    </div>
  )
}

export default UsersCard