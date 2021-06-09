import React, { useState, useEffect} from 'react';
import icons from '../data/iconSrc.json';
import waldo from '../iconImages/icon-waldo.png'
import wilma from '../iconImages/icon-wilma.jpg'
import odlaw from '../iconImages/icon-odlaw.jpg'
import azumarill from '../iconImages/icon-azumarill.png'
import charizard from '../iconImages/icon-charizard.png'
import dodou from '../iconImages/icon-dodou.png'
import electivire from '../iconImages/icon-electivire.png'
import gardevoir from '../iconImages/icon-gardevoir.jpg'
import howl from '../iconImages/icon-howl.png'
import ponyo from '../iconImages/icon-ponyo.png'

const Dropdown = (props) => {

  const [location, setLocation] = useState({left: '0', top: '0'})

  useEffect(()=> {
    setLocation({
      left: `${props.coordinates[0]}px`,
      top: `${props.coordinates[1]}px`,
      visibility: 'visible'
    })
  }, [props]);

  const getClick = (event) => {
    console.log(event.currentTarget.getAttribute("data-char"));
    props.sendClick(event.currentTarget.getAttribute("data-char"));
  }

  return (
    <div className="dropdown" style={location}>
      {
        props.char.map((character) => {
          return <div key={character} data-char={character} onClick={getClick}>
            <img src={icons[character]} alt={character}/> <h3>{character}</h3>
          </div>
        })
      }
    </div>
  );
}

export default Dropdown;