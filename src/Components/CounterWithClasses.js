import React, { Component } from 'react'

class CounterWithClasses extends Component {

  state = {
    count: 0
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  decreaseCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  }


  render() {
    return (
      <>
        <h3>Count : {this.state.count}</h3>

        <button onClick={this.increaseCount}>
          Increment
        </button>

        <button onClick={this.decreaseCount}>
          Decrement
        </button>
      </>
    )
  }
}

export default CounterWithClasses;
