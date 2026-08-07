import { useState, useEffect } from 'react'

export const useTypewriter = (sentences, typingSpeed = 100, deleteSpeed = 50, pauseDuration = 2000) => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0)
  const [currentPosition, setCurrentPosition] = useState(0)

  useEffect(() => {
    const handleTyping = () => {
      const sentence = sentences[currentSentenceIndex]
      if (!isDeleting && currentPosition <= sentence.length) {
        setText(sentence.substring(0, currentPosition + 1))
        setCurrentPosition(currentPosition + 1)
      } else if (isDeleting && currentPosition >= 0) {
        setText(sentence.substring(0, currentPosition - 1))
        setCurrentPosition(currentPosition - 1)
      } else {
        if (!isDeleting) {
          setIsDeleting(true)
          return
        }
        const nextIndex = (currentSentenceIndex + 1) % sentences.length
        setCurrentSentenceIndex(nextIndex)
        setIsDeleting(false)
        setCurrentPosition(0)
      }
    }

    const timeoutId = setTimeout(handleTyping, isDeleting ? deleteSpeed : typingSpeed)

    return () => clearTimeout(timeoutId)
  }, [currentPosition, isDeleting, currentSentenceIndex, sentences, typingSpeed, deleteSpeed])

  return text
}
