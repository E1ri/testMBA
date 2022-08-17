import React from 'react'
import { ListItems } from '../../Discipline'
import styles from './style.module.scss'

type Props = {
  listItems: ListItems | null
}

export const DesktopItem: React.FC<Props> = ({ listItems }): JSX.Element => {
  return (
    <div className={styles.discipline__container}>
      <div className={styles.module}>
        <p className={styles.module__title}>1 модуль</p>
        <ul className={styles.module__list}>
          {listItems &&
            listItems.first.map((el) => {
              return (
                <li key={el.id} className={styles.module__list_item}>
                  {el.string}
                </li>
              )
            })}
        </ul>
      </div>
      <div className={styles.module}>
        <p className={styles.module__title}>2 модуль</p>
        <ul className={styles.module__list}>
          {listItems &&
            listItems.second.map((el) => {
              return (
                <li key={el.id} className={styles.module__list_item}>
                  {el.string}
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  )
}
