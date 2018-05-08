import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'

import style from './Track.css'
import { getGenreForTrack } from '../../selectors/genreSelectors'

class Track extends Component {
  static propTypes = {
    track: PropTypes.object.isRequired,
    genres: PropTypes.arrayOf(PropTypes.object),
    rank: PropTypes.number
  }

  renderGenres = () => {
    const { genres } = this.props
    if (!genres.length) return null
    return (
      <div styleName="genreList">
        {genres.map((genre) => (
          <span
            styleName="genre"
            key={genre.id}
          >{genre.name} </span>
        ))}
      </div>
    )
  }

  render() {
    const {
      album: { cover_medium, title: albumTitle },
      artist: { name: artistName, link },
      title
    } = this.props.track

    return (
      <div styleName="Track">
        <div styleName="rank">{this.props.rank}</div>
        <div styleName="preview">
          <img styleName="image" src={cover_medium} />
        </div>
        <div styleName="details">
          <div styleName="title">{title}</div>
          <div styleName="artist">Artist: {artistName}</div>
          <div styleName="album">Album: {albumTitle}</div>
          {this.renderGenres()}
        </div>
      </div>
    )
  }
}

export default connect((state, props) => ({
  genres: getGenreForTrack(state.genres.list, props.track)
}))(CSSModules(Track, style))
