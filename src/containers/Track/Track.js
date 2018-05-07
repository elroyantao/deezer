import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class TrackList extends Component {
  static propTypes = {
    track: PropTypes.object
  }

  render() {
    const {
      album: { cover_medium, title: albumTitle },
      artist: { name, link },
      title
    } = this.props.track

    return (
      <div className="TrackList">
        <div className="TrackList-image">
          <img src={cover_medium} />
        </div>
        <div>{title}</div>
      </div>
    )
  }
}

export default connect((state) => ({
}), null)(TrackList)
