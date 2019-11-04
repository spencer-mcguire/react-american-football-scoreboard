import React, {useState, useEffect} from 'react';
import "./App.css";

const Timer = () => {
    const [mins, setMins] = useState(14)
    const [seconds, setSeconds] = useState(59);
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(59)
        setIsActive(false)
    }

    useEffect(() => {
        let interval = null;
        if(isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);
        } 
        if (seconds === -1){
            setSeconds(59)
        }
        else if (!isActive && seconds !== 0){
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    useEffect(() => {
        let interval = null;
        if(isActive) {
            interval = setInterval(() => {
                setMins(mins => mins - 1);
            }, 59200);
        } 
        if (mins === 0){
            setMins(14)
        }
        else if (!isActive && mins !== 0){
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, mins]);

    return (
        <div className="timer">
        <div className="time">
          {mins}:{seconds}s
        </div>
        <div className="row">
          <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button className="button" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    );
  };

export default Timer;