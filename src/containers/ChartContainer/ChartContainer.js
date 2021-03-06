import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import Loader from '../../components/Loader/Loader'
import Header from '../../components/Header/Header'
import TrackList from '../../components/TrackList/TrackList'
import { getCharts } from '../../actions/chartActions'

class ChartContainer extends Component {
  static propTypes = {
    getCharts: PropTypes.func.isRequired,
    Loading: PropTypes.bool
  }
  componentDidMount() {
    const { getCharts } = this.props
    getCharts()
  }
  renderLoader() {
    return (
      <div className="ChartContainer ChartContainer--loading">
        <Loader />
      </div>
    )
  }
  render() {
    const { loading } = this.props
    if (loading) return this.renderLoader()
    return (
      <div className="ChartContainer">
        <Header />
        <TrackList />
      </div>
    )
  }
}

export default connect((state) => ({
  loading: state.charts.loading
}), { getCharts })(ChartContainer)
