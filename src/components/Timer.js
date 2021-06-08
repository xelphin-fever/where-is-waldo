import React, { useState, useEffect, useRef} from 'react';

// Timer Code From: https://dev.to/emmaadesile/build-a-timer-using-react-hooks-3he2

const Timer = (props) => {

  const [second, setSecond] = useState('00');
  const [minute, setMinute] = useState('00');
  const [isActive, setIsActive] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
        const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter(counter => counter + 1);
      }, 1000)
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter])


  useEffect(()=> {
    if (props.gameOver === true){
      props.sendCounter(counter);
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }, [props])


  return (
    <div className="timer">
        <span className="minute">{minute}</span>
        <span>:</span>
        <span className="second">{second}</span>
    </div>
  );
}

export default Timer;