import React, { useRef, useState } from 'react'
import styles from './style.module.scss'
import { clsx } from 'clsx'
import { ReactComponent as PlusIcon } from '../../assets/plusIcon.svg'
import { ReactComponent as MinusIcon } from '../../assets/minusIcon.svg'

type Props = {
  title: string
  content: any
}

export const Accordion: React.FC<Props> = ({ title, content }): JSX.Element => {
  const [active, setActive] = useState<boolean>(false)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [height, setHeight] = useState<string>('0px')

  const toggleAccordion = (): void => {
    if (contentRef.current !== null) {
      setActive(!active)
      setHeight(active ? '0px' : `${contentRef.current.scrollHeight}px`)
    }
  }

  return (
    <div className={styles.accordion__section}>
      <div className={clsx({ [styles.accordion]: true, [styles.active]: active })} onClick={toggleAccordion}>
        {active ? <MinusIcon className={styles.accordion__icon} /> : <PlusIcon className={styles.accordion__icon} />}
        <p className={styles.accordion__title}>{title}</p>
      </div>
      <div ref={contentRef} style={{ maxHeight: `${height}` }} className={styles.accordion__content}>
        <div className={styles.accordion__text}>{content}</div>
      </div>
    </div>
  )
}
