import React from 'react'
import CSSModules from 'react-css-modules'

import style from './Loader.css'

function Loader() {
  return (
    <div styleName="Loader">
      <div styleName="spinner"></div>
    </div>
  )
}

export default CSSModules(Loader, style)
