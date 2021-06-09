//Images
import waldo0 from '../images/waldo/waldo-0.jpg'
import waldo1 from '../images/waldo/waldo-1.jpg'
import waldo2 from '../images/waldo/waldo-2.jpg'
import waldo3 from '../images/waldo/waldo-3.jpg'
import waldo4 from '../images/waldo/waldo-4.jpg'
import pokemon0 from '../images/pokemon/pokemon-0.jpg'
import ghibli0 from '../images/ghibli/ghibli-0.jpg'


const waldoImages = [waldo0, waldo1, waldo2,waldo3, waldo4];
const pokemonImages = [pokemon0];
const ghibliImages = [ghibli0];
const images = {
  "waldo": {
    "0": waldo0,
    "1": waldo1,
    "2": waldo2,
    "3": waldo3,
    "4": waldo4
  },
  "pokemon" : {
    "0": pokemon0
  },
  "ghibli": {
    "0": ghibli0
  }
}


const getImagesType = (type) => {
  if (type==="waldo"){
    return waldoImages;
  }
  if (type==="pokemon"){
    return pokemonImages;
  }
  if (type==="ghibli"){
    return ghibliImages;
  }
}

const getAllImages = () => images;

export {getImagesType, getAllImages};