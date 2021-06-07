import React, { useState, useEffect} from 'react';
import './home.css'
import LevelBar from '../components/LevelBar';
import waldo0 from '../images/waldo/waldo-0.jpg';
import waldo1 from '../images/waldo/waldo-1.jpg';
import waldo2 from '../images/waldo/waldo-2.jpg';
import pokemon0 from '../images/pokemon/pokemon-0.jpg';

const Home = (props) => {

  const waldoImages = [waldo0, waldo1, waldo2];
  const pokemonImages = [pokemon0];

  return (
    <div  className="page-home">
      <LevelBar title="waldo" images={waldoImages} />
      <LevelBar title="pokemon" images={pokemonImages} />
    </div>
  );
}

export default Home;