import React, { Component } from 'react'
import { connect } from 'react-redux'

import ChartContainer from '../ChartContainer/ChartContainer'

class App extends Component {
  render() {
    const { count, incrementCount } = this.props
    return (
      <div className="App">
          <ChartContainer />
      </div>
    )
  }
}

export default App
