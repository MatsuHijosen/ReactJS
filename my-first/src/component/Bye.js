import React, {Component} from 'react';


class Bye extends Component {
    render() {
        const {name, courseName} = this.props
        return <h1>Goodbye {this.props.name } aka {this.props.courseName}</h1>;
    }
}

export default Bye;