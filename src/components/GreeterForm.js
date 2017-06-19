import React, { Component } from 'react'

class GreeterForm extends Component {
  onFormSubmit = (e) => {
    e.preventDefault()
    let name = this.refs.name.value
    let message = this.refs.message.value
    console.log(name)
    // if ((name.length > 0)$$(message.length > 0)) {
    this.refs.name.value = ''
    this.refs.message.value = ''
    this.props.onNewName(name, message)
  //  }
  }

  render () {
    return <div className=''>
      <form onSubmit={this.onFormSubmit}>
        <input type='text' ref='name' />
        <input type='text' ref='message' />
        <button> set name </button>
      </form>
    </div>
  }
}

export default GreeterForm
