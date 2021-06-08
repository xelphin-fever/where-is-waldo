import './App.css';
import NavBar from './components/NavBar';
import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import Game from './pages/Game';

// TODO: Sign in as Guest (Anonymous) by default

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar username="Anonymous"/>
        <Switch> 
          <Route exact path='/' component={Home}/>
          <Route exact path='/game/:id' component={() => <Game/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
