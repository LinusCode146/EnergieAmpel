import React from 'react'
import styles from './Cardgrid.module.css'

export default function Cardgrid(props) {
  return (
    <div className={styles.Cardgrid}>
        {props.children}
    </div>
  )
}
