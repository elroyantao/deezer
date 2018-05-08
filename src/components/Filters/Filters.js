import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'

import { setSelectedGenre } from '../../actions/genreAction'
import style from './Filters.css'

class Filters extends Component {
  static propTypes = {
    genres: PropTypes.object,
    selected: PropTypes.number,
    setSelectedGenre: PropTypes.func
  }
  onChangeGenre = (event) => {
    const { setSelectedGenre } = this.props
    setSelectedGenre(parseInt(event.target.value))
  }
  renderGenreOptions = () => {
    const { genres } = this.props
    return (
      <Fragment>
        {Object.values(genres).map(({ id, name}) => (
          <option value={id} key={id}>{name}</option>
        ))}
      </Fragment>
    )
  }
  render() {
    const { selected } = this.props
    return (
      <div styleName="Filters">
          <span>Filter by genre </span>
          <select styleName="select" value={selected} onChange={this.onChangeGenre}>
            <option value="0">All</option>
            {this.renderGenreOptions()}
          </select>
      </div>
    )
  }
}

export default connect((state) => ({
  genres: state.genres.list,
  selected: state.genres.selected
}), { setSelectedGenre })(CSSModules(Filters, style))
