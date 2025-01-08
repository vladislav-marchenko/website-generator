import { useEffect, useRef, useState } from 'react'

export const useCardsAnimation = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isAnimation, setIsAnimation] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const handleAnimationEnd = () => {
      ref.current?.removeAttribute('data-animation')
      setIsAnimation(false)
    }

    ref.current.addEventListener('animationend', handleAnimationEnd)

    return () => {
      ref.current?.removeEventListener('animationend', handleAnimationEnd)
    }
  }, [])

  const previousCard = () => {
    if (isAnimation) return
    setIsAnimation(true)

    ref.current?.setAttribute('data-animation', 'left')
    setTimeout(callback, 600)
  }

  const nextCard = () => {
    if (isAnimation) return
    setIsAnimation(true)

    ref.current?.setAttribute('data-animation', 'right')
    setTimeout(callback, 600)
  }

  return {
    ref,
    previousCard,
    nextCard
  }
}
