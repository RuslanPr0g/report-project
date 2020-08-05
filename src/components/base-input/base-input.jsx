import React from 'react'
import * as styles from './base-input.module.css'

const BaseInput = ({ className = '', placeholder = '', loads, children, ...restProps  }) => (
  <label className={styles.wrapper}>
    <span className={styles.placeholder}>{ placeholder }</span>
    <input className={`${styles.input} ${className}`} { ...restProps }/>
  </label>
)

export default BaseInput