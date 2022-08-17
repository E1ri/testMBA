import React from 'react'
import styles from './style.module.scss'

type Props = {}

export const Loader: React.FC<Props> = (): JSX.Element => {
  return (
    <div className={styles.loader_container}>
      <div className={styles.loader} />
    </div>
  )
}
