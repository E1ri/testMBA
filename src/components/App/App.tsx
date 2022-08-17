import React from 'react'
import { useGetAllItemsQuery } from '../../services/itemsApi'
import { Loader } from '../Loader/Loader'
import { Main } from '../Main/Main'
import styles from './style.module.scss'

export const App: React.FC = (): JSX.Element => {
  const { data = [], isLoading } = useGetAllItemsQuery()

  return <div className={styles.app}>{!isLoading ? <Main data={data} /> : <Loader />}</div>
}
