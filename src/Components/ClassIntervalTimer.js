import React, { Component } from 'react'

class ClassIntervalTimer extends Component {

  state = {
    count : 0
  }

  tick = () => {
    this.setState({count : this.state.count+1});
  }

  componentDidMount(){
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <p>Class Interval Timer</p>
        <h3>{this.state.count}</h3>
      </div>
    )
  }
}

export default ClassIntervalTimer;
