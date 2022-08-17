import React, { useEffect, useState } from 'react'

type UseWindowSize = null | number

export const useWindowSize = (): UseWindowSize => {
  const [windowSize, setWindowSize] = useState<UseWindowSize>(null)

  useEffect(() => {
    const handleResize = (): void => {
      setWindowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}
