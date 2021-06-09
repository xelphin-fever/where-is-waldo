import React from 'react';
import './home.css'
import LevelBar from '../components/LevelBar';
import {getImagesType} from '../helper/findImage'

const Home = (props) => {

  return (
    <div  className="page-home">
      <LevelBar title="waldo" images={getImagesType("waldo")}/>
      <LevelBar title="pokemon" images={getImagesType("pokemon")} />
      <LevelBar title="ghibli" images={getImagesType("ghibli")} />
    </div>
  );
}

export default Home;