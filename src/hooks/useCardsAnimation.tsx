import { useState } from 'react'

type Animation = 'in' | 'out'
type AnimationDirection = 'left' | 'right'

export const useCardsAnimation = (callback: () => void) => {
  const [animation, setAnimation] = useState<Animation | null>(null)
  const [animationDirection, setAnimationDirection] =
    useState<AnimationDirection | null>(null)

  const changeCard = () => {
    setAnimation('out')

    setTimeout(() => {
      setAnimation('in')
      callback()
    }, 500)

    setTimeout(() => {
      setAnimation(null)
      setAnimationDirection(null)
    }, 1100)
  }

  const previousCard = () => {
    if (animation) return

    setAnimationDirection('left')
    changeCard()
  }

  const nextCard = () => {
    if (animation) return

    setAnimationDirection('right')
    changeCard()
  }

  return {
    animation,
    animationDirection,
    funcs: { previousCard, nextCard }
  }
}
