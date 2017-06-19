import React, { Component } from 'react'

class GreeterMessage extends Component {
  render () {
    return <div className='GreeterMessage'>
      {/* <h1> some paragraph </h1> */}
      <p> {this.props.name} </p>
      <p> {this.props.message}</p>
    </div>
  }
}

export default GreeterMessage
