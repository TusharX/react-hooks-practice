import React, { useState, useEffect } from 'react';

function HooksIntervalTimer() {

  const [ count, setCount  ] = useState(0);

  const tick = () => {
    console.log("Count Is :", count);
    setCount(count+1);
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      console.log("Clean up function");
      clearInterval(interval);
    }
  },[]);

  // In this example this tick funtions runs and count incremants to 1 only once and then the value doesn't change
  // after that tick funcion runs but the value of count remains same
  // if we add the count in dependecy array then it updates the value
  // else use preValue to the update the current value in setCount

  return (
    <div>
      <p>HooksIntervalTimer</p>
      <h3>{count}</h3>
    </div>
  )
}

export default HooksIntervalTimer