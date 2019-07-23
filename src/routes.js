import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import House from './components/House'
import NotFound from './components/NotFound'

export default (
  <Switch>
    <Route
      exact
      path="/"
      component={() => <Home updateHouseInfo={this.updateHouseInfo} />}
    />
    <Route path="/about" component={About} />
    <Route
      path="/house/:name"
      component={() => (
        <House
          mainColor={this.state.mainColor}
          secondaryColor={this.state.secondaryColor}
        />
      )}
    />
    <Route component={NotFound} />
  </Switch>
)
