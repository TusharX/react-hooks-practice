import React, { Component } from 'react'

class ClassCounterTitle extends Component {

  state = {
    count : 0
  };

  componentDidMount(){
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(){
    document.title = `Clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <button onClick={()=> this.setState({ count : this.state.count + 1 }) }>
          Clicked {this.state.count} time
        </button>
      </div>
    )
  }
}


export default ClassCounterTitle;