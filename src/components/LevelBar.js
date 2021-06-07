import React from 'react';
import {Link} from "react-router-dom";

const LevelBar = (props) => {

  return (
    <div className="levelBar">
      <div>
        <h2 className="levelBar-title">{props.title}</h2>
      </div>
      <div className="levelBar-images">
        {
          props.images.map((img, count) => {
            return <Link to={`game/${props.title}-${count}`} key={count}><img 
              src={img} 
              alt={props.title+'-'+count} 
              id={'thumbnail-'+props.title+'-'+count}
              key={count}
            /></Link>
          })
        }
      </div>
    </div>
  );
}

export default LevelBar;