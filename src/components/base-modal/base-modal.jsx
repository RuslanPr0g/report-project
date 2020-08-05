import React from 'react'
import * as styles from './base-modal.module.css'
import imgSpinner from '../../img/ajax-loader.gif'
import { load } from '@tensorflow-models/facemesh'

const BaseModal = ({ children, loads, open, onButtonCloseClick }) => {
  const openClassName = (open) ? styles.open : ''

  return (
    <div className={`${styles.modal} ${openClassName}`}>

      {
        (loads) ? (
          <div className={styles.spinnerWrapper}>
            <img src={imgSpinner} alt="Loading spinner" />
          </div>
        ) : (
            <div className={styles.contentWrapper}>
              {children}
            </div>
          )
      }

      <button className={styles.closeButton} onClick={onButtonCloseClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"><path fill="#111214" fillRule="evenodd" d="M7.778 9.192L0 1.414 1.414 0l7.778 7.778L16.971 0l1.414 1.414-7.778 7.778 7.778 7.779-1.414 1.414-7.779-7.778-7.778 7.778L0 16.97l7.778-7.779z" /></svg>
      </button>

    </div>
  )
}

export default BaseModal