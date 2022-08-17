import React, { useEffect, useState } from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'
import { specializedSubjects } from '../../types/specializedSubject'
import { Accordion } from '../Accordion/Accordion'
import { DesktopItem } from './components/DesktopItem/DesktopItem'
import styles from './style.module.scss'

type Props = {
  items: any[]
  title: string
}

export type ListItems = {
  first: specializedSubjects[]
  second: specializedSubjects[]
}

export const Discipline: React.FC<Props> = ({ items, title }): JSX.Element => {
  const [listItems, setListItems] = useState<ListItems | null>(null)
  const widthNumber = useWindowSize()

  useEffect(() => {
    setListItems({
      first: items.slice(0, Math.round(items.length / 2)),
      second: items.slice(Math.round(items.length / 2)),
    })
  }, [])

  return (
    <div className={styles.discipline}>
      <h2 className={styles.discipline__title}>{title}</h2>
      {widthNumber !== null && widthNumber >= 900 ? (
        <DesktopItem listItems={listItems} />
      ) : (
        <>
          <div className={styles.accordion_container}>
            <Accordion
              title='1 модуль'
              content={
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
              }
            />
          </div>
          <div className={styles.accordion_container}>
            <Accordion
              title='2 модуль'
              content={
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
              }
            />
          </div>
        </>
      )}
    </div>
  )
}
