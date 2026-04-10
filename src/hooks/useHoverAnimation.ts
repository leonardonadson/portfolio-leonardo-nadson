import { useState, useEffect } from 'react'

export function useHoverAnimation() {
  const [supportsHover, setSupportsHover] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    setSupportsHover(mq.matches)
  }, [])

  return supportsHover
}
