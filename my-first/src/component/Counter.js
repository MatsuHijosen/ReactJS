import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
         
      }
    }
    increment() {
        // this.setState({
        //     count: this.state.count + 1
            
        // }, () => {console.log('Callback value', this.state.count)})
        // console.log(this.state.count)
        this.setState((prevState) => ({ 
            count: prevState.count + 1
        }))
        
    }
    decrement() {
      this.setState({
          count: this.state.count -5})
          
      // }, () => {console.log('Callback value', this.state.count)})
      // console.log(this.state.count)
      
  }
  
    
  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick = {() => this.increment()}>Increment </button>
        <button onClick = {() => this.decrement()}>Decrement </button>
      </div>
    )
  }
}

export default Counter