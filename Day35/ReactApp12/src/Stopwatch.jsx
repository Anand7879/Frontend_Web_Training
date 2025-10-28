import React from 'react'
import { useState } from 'react';

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

   const start = () => {
    setIsRunning(true);
    const timer = setInterval(() => {
      setSeconds(s => s + 1);
    }, 500);
}
const stop = () => {
    setIsRunning(false);
    clearInterval(timer);
  };
 const reset = () => {
    // stop();
    setSeconds(0);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>{seconds} seconds</h2>
      
      <button onClick={start} disabled={isRunning}>
        Start
      </button>
      
      <button onClick={stop} disabled={!isRunning}>
        Stop
      </button>
      
      <button onClick={reset}>
        Reset
      </button>
    </div>
  )
}

export default Stopwatch



// import { useState } from 'react';

// export default function Stopwatch() {
//   const [seconds, setSeconds] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   // Start the timer
//   const start = () => {
//     setIsRunning(true);
//     const timer = setInterval(() => {
//       setSeconds(s => s + 1);
//     }, 1000);
    
//     // Store timer ID so we can stop it later
//     window.stopwatchTimer = timer;
//   };

//   // Stop the timer
//   const stop = () => {
//     setIsRunning(false);
//     clearInterval(window.stopwatchTimer);
//   };

//   // Reset everything
//   const reset = () => {
//     stop();
//     setSeconds(0);
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '100px' }}>
    //   <h1>Stopwatch</h1>
      
    //   <h2>{seconds} seconds</h2>
      
    //   <button onClick={start} disabled={isRunning}>
    //     Start
    //   </button>
      
    //   <button onClick={stop} disabled={!isRunning}>
    //     Stop
    //   </button>
      
    //   <button onClick={reset}>
    //     Reset
    //   </button>
//     </div>
//   );
// }