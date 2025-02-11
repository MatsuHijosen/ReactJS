import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            username: '',
            comments: '',
            topic: 'react'
            
      }
    }


    //Edit the input field
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })

    }

    handleTopicChange = (event) => { 
        this.setState({
            topic: event.target.value
        })
    }   

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    





  render() {
    const {username, comments, topic} = this.state
    return (
    <form onSubmit = {this.handleSubmit}> 
            <div>
                <label>Username</label>
                <input type="text" value={this.state.username} 
                onChange={this.handleUsernameChange}/>
                
            </div>

            <div>
                <label>Comments</label>
                <textarea value = {this.state.comments} onChange={this.handleCommentsChange}></textarea>

            </div>

            <div>
                <label> Topic 
                    <select value = {this.state.topic} onChange = {this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </label>
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>
      </form>
    )
  }
}

export default Form
