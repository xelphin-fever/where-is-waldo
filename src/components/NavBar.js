import React, { useState, useEffect} from 'react';
import {Link} from "react-router-dom";

const NavBar = (props) => {
  // maybe get username from firebase
  // get whether 'sign in' or 'sign out' with firebase

  // if in game mode, show in center 'Find Waldo [image]' or the alternative for specific game

  return (
    <div className="navbar">
      
      <div className="navbar-group">
        <h2>{props.username}</h2>
        <button className="nav-sign navbar-element">Sign In</button>
      </div>

      <div className="navbar-group">
        <Link to='/leaderboard'>
          <h2 className="navbar-element">🏆</h2>
        </Link>
        <Link to='/'>
          <h2 className="navbar-element">🏠</h2>
        </Link>
      </div>
      
    </div>
  );
}

export default NavBar;