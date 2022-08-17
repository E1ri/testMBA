import React from 'react'
import styles from './style.module.scss'

type Props = {}

export const Cards: React.FC<Props> = (): JSX.Element => {
  return (
    <div className={styles.cards}>
      <div className={styles.cards__red}>
        <h2 className={styles.cards__title}>Практические модули</h2>
        <p className={styles.cards__red_text}>
          Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе
        </p>
      </div>
      <div className={styles.cards__gray}>
        <h2 className={styles.cards__title}>Итоговая аттестация</h2>
        <ul className={styles.cards__gray_list}>
          <li className={styles.cards__gray_item}>
            Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)
          </li>
          <li className={styles.cards__gray_item}>Защита итоговой аттестационной работы</li>
        </ul>
      </div>
    </div>
  )
}
