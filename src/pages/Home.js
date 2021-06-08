import React from 'react';
import './home.css'
import LevelBar from '../components/LevelBar';
//Images
import waldo0 from '../images/waldo/waldo-0.jpg'
import waldo1 from '../images/waldo/waldo-1.jpg'
import waldo2 from '../images/waldo/waldo-2.jpg'
import waldo3 from '../images/waldo/waldo-3.jpg'
import waldo4 from '../images/waldo/waldo-4.jpg'
import pokemon0 from '../images/pokemon/pokemon-0.jpg'
import ghibli0 from '../images/ghibli/ghibli-0.jpg'

const Home = (props) => {

  const waldoImages = [waldo0, waldo1, waldo2,waldo3, waldo4];
  const pokemonImages = [pokemon0];
  const ghibliImages = [ghibli0];


  return (
    <div  className="page-home">
      <LevelBar title="waldo" images={waldoImages} />
      <LevelBar title="pokemon" images={pokemonImages} />
      <LevelBar title="ghibli" images={ghibliImages} />
    </div>
  );
}


// 407 30 120 543
export default Home;