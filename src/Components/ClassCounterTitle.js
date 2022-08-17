import React, { Component } from 'react'

class ClassCounterTitle extends Component {

  state = {
    count : 0,
    name : ""
  };

  componentDidMount(){
    document.title = `Clicked ${this.state.count} times`;
  }

  // componentDidUpdate(){
  //   console.log("Updated Document title");
  //   document.title = `Clicked ${this.state.count} times`;
  // }

  // Conditional Rendering in class based components
  componentDidUpdate(prevProps, prevState){

    if(prevState.count !== this.state.count){
      
      console.log("Updated Document title");
      document.title = `Clicked ${this.state.count} times`;
    }

  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={e => this.setState({name : e.target.value})}/>
        <button onClick={()=> this.setState({ count : this.state.count + 1 }) }>
          Clicked {this.state.count} time
        </button>
      </div>
    )
  }
}


export default ClassCounterTitle;