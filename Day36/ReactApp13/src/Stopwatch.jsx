import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [Minisec, setMinisec] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

   const start = () => {
    if (isRunning) return; 

    setIsRunning(true);

     timerRef.current = setInterval(() => {
      setMinisec((ms) => {
        if (ms === 99) {
          setSeconds((s) => s + 1);
          return 0;
        }
        return ms + 1;
      });
    }, 10)
}
const stop = () => {
    setIsRunning(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };
 const reset = () => {
    stop();
    setSeconds(0);
    setMinisec(0)
  };

  return (
    <div id="box">
      <h1>Stopwatch</h1>
       <h2>
        {seconds}.{Minisec.toString().padStart(2, "0")}
      </h2>
      
      <button id = "1" onClick={start} disabled={isRunning}>
        Start
      </button>
      
      <button id = "2" onClick={stop} disabled={!isRunning}>
        Stop
      </button>
      
      <button id = "3" onClick={reset}>
        Reset
      </button>
    </div>
  )
}

export default Stopwatch

