import './game.css';
import React, { useState, useEffect} from 'react';
import { useRouteMatch } from "react-router-dom";
import imageData from '../data/imgSrc.json';
import firebase from '../firebase';
import Dropdown from '../components/Dropdown';
import Timer from '../components/Timer';

const Game = (props) => {
  // Get the Image Src
  let match =useRouteMatch('/game/:id').url.split('/');
  match=match[match.length-1];
  const [type,level] =  match.split('-');
  const imgSrc = imageData[type][level];
  // Game Variables
  const [charCoord, setCharCoord] = useState([]);
  const [char, setChar] = useState([]);
  const [currImgCoord, setCurrImgCoord] = useState([0,0]);
  const [currPgCoord, setCurrPgCoord] = useState([0,0]);
  const [hasInit, setHasInit] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [counter, setCounter] = useState(0);


  // INITIALIZE GAME DATA
  useEffect(()=> {
    let firestore = firebase.firestore();
    firestore.collection("gameCoordinates").doc(match).get().then((myDoc) => {
        console.log("my doc: ", myDoc.data());
        setCharCoord(myDoc.data());
        setChar(Object.keys(myDoc.data()));
        setHasInit(true);
    });
    // After an hour send game over
    setTimeout(function(){ setGameOver(true) }, 1000*60*59);
  }, []);


  // CHECK FOR GAME OVER
  useEffect(() => {
    console.log('char: ', char);
    if (char.length === 0 && hasInit === true){
      setGameOver(true);
    }
  }, [char, hasInit])


  // SET CURRENT COORDINATES
  const sendCoordinates = (event) => {
    let xCoordinate = event.nativeEvent.offsetX;
    let yCoordinate = event.nativeEvent.offsetY;
    let imgWidth = event.target.clientWidth;
    let imgHeight = event.target.clientHeight;
    // console.log(`x: ${Math.round(xCoordinate*100/imgWidth)} y: ${Math.round(yCoordinate*100/imgHeight)}`);
    // console.log(`Page x: ${event.pageX} y: ${event.pageY}`);
    setCurrImgCoord([Math.round(xCoordinate*100/imgWidth), Math.round(yCoordinate*100/imgHeight)]);
    setCurrPgCoord([event.pageX, event.pageY]);
  }

  // CHECK FOR CORRECT CHARACTER LOCATION
  const checkForChar = (myChar) => {
    const myCharCoord = charCoord[myChar];
    if (Math.abs(currImgCoord[0]-myCharCoord[0])<3.5 && Math.abs(currImgCoord[1]-myCharCoord[1])<3.5){
      console.log('Yay! You found ', myChar);
      let charCopy = [...char];
      charCopy = charCopy.filter((currChar) => currChar !== myChar);
      setChar(charCopy);
    }
  }

  // GET COUNTER AND UPDATE LEADERBOARD
  const getCounter = (count) => {
    console.log('counter: ', count);
    if (counter === 0){
      setCounter(count);
      // UPDATE SCORE TO LEADERBOARD
      let firestore = firebase.firestore();
      firestore
      .collection("scores").doc(match).collection("playerScores")
      .add({
        username: firebase.auth().currentUser.displayName,
        time: count,
        uid: firebase.auth().currentUser.uid,
      })
      .then((docRef) => {
        console.log("High score saved ", docRef);
      })
      .catch(function (error) {
        console.error("Error writing in score", error);
      });
    }
  }

  return (
    <div  className="page-game">
      <div className="space-div"></div>
      <img className="game-image" src={imgSrc} alt="game" onClick={sendCoordinates}/>
      {
        char.length!==0 ? <Dropdown coordinates = {currPgCoord} char = {char} sendClick = {checkForChar}/> : null
      }
      <Timer gameOver={gameOver}  sendCounter={getCounter}  />
    </div>
  );
}

export default Game;