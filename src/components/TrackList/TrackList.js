import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'

import Track from '../Track/Track'
import { getFilteredTracks } from '../../selectors/trackSelector'
import style from './TrackList.css'

class TrackList extends Component {
  static propTypes = {
    tracks: PropTypes.arrayOf(PropTypes.object)
  }
  renderTracks = () => {
    const { tracks } = this.props
    return tracks.map((track, index) => (
      <Track track={track} key={track.id} rank={index + 1}/>
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
  tracks: getFilteredTracks(state)
}))(CSSModules(TrackList, style))
