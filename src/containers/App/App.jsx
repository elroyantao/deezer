import React, { Component } from 'react'
import { connect } from 'react-redux'

import { incrementCount } from '../../actions/homeActions'

class App extends Component {
  render() {
    const { count, incrementCount } = this.props
    return (
      <div className="App">
          <div>This is a react minimalist boilerplate</div>
          <br />
          <div>count : {count}</div>
          <button onClick={incrementCount}>Click to Increment Count</button>
      </div>
    )
  }
}

export default connect((state) => ({
  count: state.home.count
}), { incrementCount })(App)
