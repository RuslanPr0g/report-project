import React from 'react'
import * as styles from './base-button.module.css'
import imgSpinner from '../../img/ajax-loader.gif'

const BaseButton = ({ className = '', loads, children, ...restProps  }) => (
  <button className={`${styles.button} ${className}`} { ...restProps }>

    { loads && <img src={imgSpinner} alt="Loading spinner" /> }

    { !loads &&  children}

  </button>
)

export default BaseButton