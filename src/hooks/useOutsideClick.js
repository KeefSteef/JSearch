import { useEffect, useRef } from 'react'

export const useOutsideClick = (callback, exceptionClass = '') => {
  const ref = useRef(null)

  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target
      if (ref.current && (!exceptionClass || !target.className.includes(exceptionClass))) {
        callback()
      }
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [ref])

  return ref
}
