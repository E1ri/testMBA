import React from 'react'
import { item } from '../../types/item'
import { Cards } from '../Cards/Cards'
import { Discipline } from '../Discipline/Discipline'
import styles from './style.module.scss'

type Props = {
  data: item[]
}

export const Main: React.FC<Props> = ({ data }): JSX.Element => {
  return (
    <div className={styles.main}>
      <h1 className={styles.main__heading}>Специализированные дисциплины</h1>
      <div className={styles.main__discipline_container}>
        {data &&
          data.map((el: item) => {
            return (
              <div key={el._id} className={styles.main__discipline}>
                <Discipline title={el.title} items={el.specializedSubjects} />
              </div>
            )
          })}
      </div>
      <Cards />
    </div>
  )
}
