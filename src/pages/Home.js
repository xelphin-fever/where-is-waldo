import React from 'react';
import './home.css'
import LevelBar from '../components/LevelBar';
import imageData from '../data/imgSrc.json';

const Home = (props) => {

  const waldoImages = [imageData.waldo[0], imageData.waldo[1], imageData.waldo[2],imageData.waldo[3], imageData.waldo[4]];
  const pokemonImages = [imageData.pokemon[0]];
  const ghibliImages = [imageData.ghibli[0]];

  return (
    <div  className="page-home">
      <LevelBar title="waldo" images={waldoImages} />
      <LevelBar title="pokemon" images={pokemonImages} />
      <LevelBar title="ghibli" images={ghibliImages} />
    </div>
  );
}

export default Home;