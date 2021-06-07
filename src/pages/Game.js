import React, { useState, useEffect} from 'react';
import { useRouteMatch } from "react-router-dom";
import imageData from '../data/imgSrc.json';

const Game = (props) => {
  // Get the Image Src
  let match =useRouteMatch('/game/:id').url.split('/');
  match=match[match.length-1];
  const [type,level] =  match.split('-');
  const imgSrc = imageData[type][level];


  const sendCoordinates = (event) => {
    let xCoordinate = event.offsetX;
    let yCoordinate = event.offsetY;
    console.log(`x: ${xCoordinate} y: ${yCoordinate}`);
  }


  return (
    <div  className="page-game">
      <img className="game-image" src={imgSrc} alt="game" onClick={sendCoordinates}/>
    </div>
  );
}

export default Game;