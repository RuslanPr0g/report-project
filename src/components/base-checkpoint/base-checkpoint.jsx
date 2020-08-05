import React from 'react'
import * as styles from './base-checkpoint.module.css'

const BaseCheckpoint = ({ className = '', completed, ...restProps  }) => {
  const completedClassName = (completed) ? styles.completed : ''

  return <div className={`${styles.checkpoint} ${completedClassName} ${className}`} { ...restProps }/>
}

export default BaseCheckpoint