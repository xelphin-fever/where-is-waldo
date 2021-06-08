import React, { useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import SignIn from './SignIn'
import firebase from '../firebase'

const NavBar = (props) => {

  const [username, setUsername] = useState("Guest");
  const [showSignIn, setShowSignIn] = useState(false);

  const toggleSignIn = () => {
    setShowSignIn(!showSignIn)
  }

  firebase.auth().onAuthStateChanged((fireBaseUser) => {
    if (fireBaseUser) {
      setUsername(firebase.auth().currentUser.displayName);
    }
  });


  return (
    <div className="navbar">
      
      <div className="navbar-group">
        <h2>{username}</h2>
        <button className="nav-sign navbar-element" onClick={toggleSignIn}>Sign In</button>
      </div>

      <div className="navbar-group">
        <Link to='/leaderboard'>
          <h2 className="navbar-element">🏆</h2>
        </Link>
        <Link to='/'>
          <h2 className="navbar-element">🏠</h2>
        </Link>
      </div>
      
      {
        showSignIn === true ? <SignIn hide={toggleSignIn} setUser={(name) => setUsername(name)} /> : null
      }

    </div>
  );
}

export default NavBar;