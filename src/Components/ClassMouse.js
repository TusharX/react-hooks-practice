import React, { Component } from 'react'

class ClassMouse extends Component {

  state = {
    x : 0,
    y : 0
  }

  trackMousePosition = (e) =>{
    // console.log("Event :", e);
    this.setState({
      x : e.clientX,
      y : e.clientY
    });
  }

  // Component Did mount runs only once after the render of Component
  componentDidMount(){
    window.addEventListener("mousemove", this.trackMousePosition);
  }

  // Clean up the listener
  componentWillUnmount(){
    window.removeEventListener("mousemove", this.trackMousePosition);
  }

  render() {
    return (
      <div>
        X - {this.state.x} y - {this.state.y}
      </div>
    )
  }
}

export default ClassMouse;
