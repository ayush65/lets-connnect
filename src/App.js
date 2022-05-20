import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { selectUser } from './features/userSlice';
import Header from './Homepage/Header/Header';
import Homepage from './Homepage/Homepage';
import Login from './Login/Login';

function App() {
  const user = useSelector(selectUser);


  return (
    <div className="app">
      <Header />

      {!user ? (
          <Login />
        )  : (
     <Homepage />
        )}
    </div>
  );
}

export default App;
