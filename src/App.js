import './App.css';
import NavBar from './components/NavBar';
import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import Game from './pages/Game';
import firebase from './firebase';

// TODO: Sign in as Guest (Anonymous) by default

// check if not signed in true
// sign in as guest


// change sign in settings: continue as guest || sign up || log in

function App() {

  firebase.auth().onAuthStateChanged((fireBaseUser) => {
    if (fireBaseUser) {
      console.log("Current User: ", firebase.auth().currentUser);
    } else {
      console.log("not logged in -> Sign in as Guest");
      const promise = firebase.auth().signInAnonymously();
      promise.then(function(result) {
        return result.user.updateProfile({
          displayName: "Guest",
        })
      })
      promise.catch((e) => (console.log(e)));
    }
  });


  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch> 
          <Route exact path='/' component={Home}/>
          <Route exact path='/game/:id' component={() => <Game/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
