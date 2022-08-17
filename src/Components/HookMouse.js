import React, { useState, useEffect } from 'react'

function HookMouse() {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const trackMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(() => {
    window.addEventListener("mousemove", trackMousePosition); 

    return () =>{
      console.log("Clean Up function");
      window.removeEventListener("mousemove", trackMousePosition);
    }
  },[])

  return (
    <div>
      X - {x}  Y - {y}
    </div>
  )
}

export default HookMouse;