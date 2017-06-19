import React, { Component } from 'react'
import GreeterMessage from './GreeterMessage'
import GreeterForm from './GreeterForm'

class Greeter extends Component {
  state = {
    name: this.props.name,
    message: this.props.message
  }

  handleNewName = (name, message) => {
    this.setState({
      name: name,
      message: message
    })
  }

  render () {
    let name = this.state.name
    let message = this.state.message
    return <div className='Greeter'>
      <GreeterMessage name={name} message={message} />
      <GreeterForm onNewName={this.handleNewName} />
    </div>
  }
}

Greeter.defaultProps = {
  name: 'Mary',
  message: 'hello world'
}

export default Greeter
