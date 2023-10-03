export const useOutsideClick = (callback, exceptionClass = '') => {
  const handleClick = (event) => {
    const target = event.target
    if (
      ref.current &&
      (!exceptionClass || !target.className.includes(exceptionClass))
    ) {
      callback()
    }
  }

  return {
    handleClick,
  }
}
