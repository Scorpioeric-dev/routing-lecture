import React, { Component } from 'react'
import './App.css'
import routes from './routes'

class App extends Component {
  constructor() {
    super()
    this.state = {
      house: null,
      mainColor: '',
      secondaryColor: ''
    }
    this.routes = routes
  }
  updateHouseInfo = newState => {
    this.setState(newState)
  }
  render() {
    console.log(typeof this.routes)
    return (
        <div className="App">
          <h1>Hogwarts School</h1>
          {this.routes}
        </div>
    )
  }
}

export default App
