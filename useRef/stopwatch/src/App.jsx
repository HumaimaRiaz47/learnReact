import React, { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const timeref = useRef(null);

  function handleStart() {
    timeref.current = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  }

  function handleStop() {
    clearInterval(timeref.current);
    timeref.current = null;
  }

  function handleReset() {
    setSeconds(0);
  }
  //When you use setInterval, it keeps running until you manually stop it using clearInterval.
  // If you accidentally call handleStart multiple times without stopping the previous interval,
  // you’ll create multiple timers running at the same time, which can cause unexpected 
  //behavior (like the timer counting faster than it should).

  return (
    <div>
      <h1>stopwatch: {seconds} seconds</h1>
      <br />
      <br />
      <button onClick={handleStart}>start</button>
      <br />
      <br />
      <button onClick={handleStop}>stop</button>
      <br />
      <br />
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default App;
