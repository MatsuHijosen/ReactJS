import React, { Component } from 'react'

class GreetPips extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    
  render() {

    if (this.state.isLoggedIn) {
    return (
      
        <div>Welcome Pips</div>
        
     
    )
  } else {
    return (
      
        <div>Welcome Guest</div>
        
    
    )
  }
}
}

export default GreetPips;
