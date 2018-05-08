import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'

import Filters from '../Filters/Filters'
import style from './Header.css'

class Header extends Component {
  static propTypes = {
    chart: PropTypes.object
  }

  render() {
    const { chart: { title }} = this.props
    return (
      <div styleName="Header">
        <div styleName="title">{title}</div>
        <Filters styleName="filter"/>
      </div>
    )
  }
}

export default connect((state) => ({
  chart: state.charts.details
}))(CSSModules(Header, style))
