import React, { useState, useEffect} from 'react';
import imageData from '../data/imgSrc.json';
import './leaderboard.css';
import firebase from '../firebase';

const LeaderBoard = (props) => {

  const typeNames = Object.keys(imageData);

  const [currType, setCurrType] = useState("waldo");
  const [currLevel, setCurrLevel] = useState("0");
  const [typeLevels, setTypeLevels] = useState(imageData["waldo"]);
  const [images, setImages] = useState([]);
  //
  const [scores, setScores] = useState([]);
  const [myScore, setMyScore] = useState([-1,-1])

  useEffect(() => {
    const imgArray = [];
    for (let key in typeLevels) {
      const img = <img 
        key={key}
        src={typeLevels[key]} 
        alt={`${currType}-${key}`} 
        data-level={`${currType}-${key}`}
        onClick={()=> {setCurrLevel(key)}}
      />
      imgArray.push(img);
    }
    setImages(imgArray);
  },[typeLevels, currType]);


  useEffect(() => {
    let scoreCopy = [];
    let firestore = firebase.firestore();
    // TODO: check that such collection exist before calling?
    firestore.collection("scores").doc(`${currType}-${currLevel}`).collection("playerScores").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
              scoreCopy.push(doc.data());
        });
        scoreCopy = scoreCopy.sort(function(a,b){
          if (a.time > b.time){
            return 1;
          } else {
            return -1;
          }
        })
        setScores(scoreCopy);
    });
  },[currLevel, currType]);

  useEffect(() => {
    // Remember: Scores is ordered so the first instance is also the top score
    let myTime = -1;
    let myPlace = -1;
    for (let i=0; i<scores.length && myTime===-1; i++){
      if (scores[i].uid){
        if (scores[i].uid === firebase.auth().currentUser.uid){
          myTime = scores[i].time;
          myPlace = i;
        }
      }
    }
    setMyScore([myTime,myPlace]);
  }, [scores])


  return (
    <div  className="page-leaderboard">
      <div className="space-div"></div>
      <div className="leaderboard-types">
        {
          typeNames.map((name) => {
            return <button 
              key={name} 
              data-type={name} 
              onClick={() => {setCurrType(name); setCurrLevel("0"); setTypeLevels(imageData[name])}}>
                {name}
            </button>
          })
        }
      </div>
      <div className="leaderboard-levels">
        {images.map((img) => img)}
      </div>
      <div className="leaderboard-board">
        <h2>{`${currType}-${currLevel}`}</h2>
        {myScore[0] !== -1 ? <h3>{`Your high score: ${myScore[0]}. Place: #${myScore[1]+1}`}</h3> : null}
        <br/>
        <table>
          <tbody>
            <tr>
              <th className="leaderboad-left">Name</th>
              <th className="leaderboad-right">Score</th>
            </tr>
            {scores.map((user, count) => 
              <tr key={count}>
                <td  className="leaderboad-left">{user.username}</td>
                <td  className="leaderboad-right">{user.time}</td>
              </tr>
            )}
          </tbody>
        </table> 
      </div>
    </div>
  );
}

export default LeaderBoard;