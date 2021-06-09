import './App.css';
import NavBar from './components/NavBar';
import React, { useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import Game from './pages/Game';
import LeaderBoard from './pages/LeaderBoard';
import firebase from './firebase';


function App() {


  useEffect(() => {
    console.log('my user at start: ',firebase.auth().currentUser);

    setTimeout( () => {
      console.log('my user at start -2: ',firebase.auth().currentUser);
      if (!firebase.auth().currentUser){
        console.log("not logged in -> Sign in as Guest");
        const promise = firebase.auth().signInAnonymously();
        promise.then(function(result) {
          console.log('made a user!');
          return result.user.updateProfile({
            displayName: "Guest",
          })
        })
        promise.catch((e) => (console.log(e)));
      } else {
        console.log('I am already logged in');
      }
    } , 1000)
    // I don't like doing this wait, I'd prefer an Async if I knew how to implement it well
    
  }, [])


  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch> 
          <Route exact path='/where-is-waldo/' component={Home}/>
          <Route exact path='/where-is-waldo/game/:id' component={() => <Game/>}/>
          <Route exact path='/where-is-waldo/leaderboard' component={LeaderBoard}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
