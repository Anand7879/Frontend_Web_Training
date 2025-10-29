// import React from 'react'
// import { useState } from 'react';
// import { useRef } from 'react';

// const Stopwatch = () => {
//   const [seconds, setSeconds] = useState(0);
//   const [Minisec, setMinisec] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);
//   const timerRef = useRef(null);

//    const start = () => {
//     if (isRunning) return; 

//     setIsRunning(true);

//      timerRef.current = setInterval(() => {
//       setMinisec((ms) => {
//         if (ms === 99) {
//           setSeconds((s) => s + 1);
//           return 0;
//         }
//         return ms + 1;
//       });
//     }, 10)
// }
// const stop = () => {
//     setIsRunning(false);
//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//       timerRef.current = null;
//     }
//   };
//  const reset = () => {
//     stop();
//     setSeconds(0);
//     setMinisec(0)
//   };

//   return (
//     <div id="box">
      // <h1>Stopwatch</h1>
      //  <h2>
      //   {seconds}.{Minisec.toString().padStart(2, "0")}
      // </h2>
      
      // <button id = "1" onClick={start} disabled={isRunning}>
      //   Start
      // </button>
      
      // <button id = "2" onClick={stop} disabled={!isRunning}>
      //   Stop
      // </button>
      
      // <button id = "3" onClick={reset}>
      //   Reset
      // </button>
//     </div>
//   )
// }

// export default Stopwatch



import React, { useEffect, useState } from 'react'

const Stopwatch = () => {

  const [time,setTime] = useState(0)
  const [isRunning,setIsRunning] = useState(false)
  const [inputValue, setInputValue] = useState('');

  useEffect(()=>{
    let timer
    if(isRunning){
      timer = setInterval(()=>{
        setTime((s) => s+1);
      },1000);
    } else{
      clearInterval(timer)
    }

     return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  function handleChange(event) {
      setInputValue(event.target.value);
    }

  function handleSetTime() {
    const seconds = parseInt(inputValue, 10);
    if (!isNaN(seconds) && seconds >= 0) {
      setTime(seconds);
      setInputValue('');
    } else {
      alert('Please enter a valid number of seconds');
    }
  }

  return (
    <div id = "box">
        <h1>⏱ Stopwatch</h1>
        <div >
            <h2>{formatTime(time)}</h2>
        </div>
        <input
        type="number"
        onChange={handleChange}
        value={inputValue}
        placeholder="Enter seconds"
      />
      <button onClick={handleSetTime}>Set Time</button>
      <div>
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Stop</button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  )
}

export default Stopwatch

