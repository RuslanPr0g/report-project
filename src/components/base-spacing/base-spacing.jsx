import React from 'react'

const BaseSpacing = ({ size = 1 }) => (
  <div style={{
    height: `${8 * size}px`,
  }}/>
)

export default BaseSpacing