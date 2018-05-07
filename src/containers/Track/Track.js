import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'

import style from './Track.css'

class Track extends Component {
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
      <div styleName="Track">
        <div styleName="Track-preview">
          <img styleName="Track-image" src={cover_medium} />
        </div>
        <div styleName="Track-details">{title}</div>
      </div>
    )
  }
}

export default connect((state) => ({
}), null)(CSSModules(Track, style))
