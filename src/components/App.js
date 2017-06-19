import React, { Component } from 'react'
import Greeter from './greeter'

class App extends Component {
  render () {
    let firstName = 'john'
    return <div>
      <Greeter name={firstName} message='this is a component' />
    </div>
  }
}

export default App
