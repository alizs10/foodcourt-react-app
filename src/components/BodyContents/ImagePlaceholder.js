import React from 'react'

function ImagePlaceholder({classes}) {
  return (
    <div className={`${classes} bg-white/70 rounded-lg flex-center`}>
        <i className="fa-regular fa-loader text-3xl"></i>
    </div>
  )
}

export default ImagePlaceholder