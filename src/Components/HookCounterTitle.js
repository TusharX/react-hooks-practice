import React, { useState, useEffect } from 'react';

function HookCounterTitle() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = ` clicked ${count} times`;
  });

  // useEffect runs after every re-render of the component if its written like this

  return (
    <div>
      <button onClick={() => setCount(count+1)}>
        Clicked {count} times
      </button>
    </div>
  )
}

export default HookCounterTitle;