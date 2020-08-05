import React from 'react'
import * as styles from './error-message.module.css'

const ErrorMessage = ({ className = '', loads, ...restProps  }) => (
  <div className={`${styles.errorMessage} ${className}`} { ...restProps }/>
)

export default ErrorMessage