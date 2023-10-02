import cls from './Button.module.scss'

function Button({ children, type = 'dark', cb = () => {} }) {
  return (
    <button className={`${cls.button} ${cls[type]}`} onClick={cb}>
      {children}
    </button>
  )
}

export default Button
