import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Track from '../../containers/Track/Track'

class TrackList extends Component {
  static propTypes = {
    tracks: PropTypes.arrayOf(PropTypes.object)
  }
  renderTracks = () => {
    const { tracks } = this.props
    return tracks.map((track) => (
      <Track track={track} key={track.id}/>
    ))
  }
  render() {
    return (
      <div className="TrackList">
        {this.renderTracks()}
      </div>
    )
  }
}

export default connect((state) => ({
  tracks: state.charts.tracks
}), null)(TrackList)
