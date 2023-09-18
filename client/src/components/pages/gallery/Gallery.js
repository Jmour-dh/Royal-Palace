import React from 'react'
import Gallery_header from './components/Gallery_header'
import Gallery_tabs from './components/Gallery_tabs'

function Gallery() {
  return (
    <div className={Gallery}>
      <Gallery_header/>
      <Gallery_tabs/>
    </div>
  )
}

export default Gallery
