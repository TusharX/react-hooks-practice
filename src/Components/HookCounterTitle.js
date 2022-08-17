import React, { useState, useEffect } from 'react';

function HookCounterTitle() {

  const [count, setCount] = useState(0);

  // useEffect runs after every re-render of the component if its written like this
  // useEffect(() => {
  //   console.log("Updating Document Title");
  //   document.title = `clicked ${count} times`;
  // });

  // useEffect conditional Rendereing 
  useEffect(() => {
    console.log('Updating document title');
    document.title = `clicked ${count} times`;
  }, [count]);


  return (
    <div>
      <button onClick={() => setCount(count+1)}>
        Clicked {count} times
      </button>
    </div>
  )
}

export default HookCounterTitle;