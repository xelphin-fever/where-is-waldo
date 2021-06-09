import React, { useState, useEffect} from 'react';
import icons from '../data/iconSrc.json';

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