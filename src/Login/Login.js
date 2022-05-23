import React from 'react'
import Button from '@mui/material/Button';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import {getAuth} from 'firebase/auth';
import {createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth"
import './Login.css'

function Login() {
  const [email , setEmail] = useState('');
  const [name , setName] = useState('');
  const [password , setPassword] = useState('');
  const [profilepic, setProfile] = useState('');

  const dispatch = useDispatch();

  const auth = getAuth();

  const setInput = () => {
    setEmail("ayushprakash111@gmail.com");
    setPassword("ayush65pra");
  }

  
  const logintapp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((userAuth) =>{
              dispatch(
                        login({
                                  email: userAuth.user.email,
                                  uid: userAuth.user.uid,
                                  displayName: userAuth.user.displayName,
                                  photoUrl: userAuth.user.profilepic,
                        })
              )
    } ).catch(error => alert(error));
};

const register = () => {
    if (!name){
              return alert("Please enter the full name");
    
    }
    createUserWithEmailAndPassword(auth,email,password).then((userAuth) => {

                                  dispatch(login({
                                             email: userAuth.user.email,
                                             uid: userAuth.user.uid,
                                             displayName: name,
                                             photoUrl: profilepic
                                  }))
                                  alert("user created now you can directly login")
            
    }).catch(error => alert(error));
};


  return (
    <div>
    <div className="login">
      
    <img src='data:image/png;base64,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' alt=""></img>


<form>
    <input  value={name} onChange={(e) => setName(e.target.value)} placeholder='Fullname required if registered' type="text"  />
    <input    value={profilepic} onChange={(e) => setProfile(e.target.value)} placeholder='profile picture Url(Optional)' type="text" />
    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type="email" />
    <input   value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' type='password' />

    <Button type='submit' onClick={logintapp} className="btn-sign-in">Sign In</Button>
</form>
<Button  onClick={setInput}>Sign in with test credentials</Button>

<p>Not a member?  
    <span className="register_login" onClick={register}>
               Register Now
    </span>
</p>

</div>

</div>
  )
}

export default Login