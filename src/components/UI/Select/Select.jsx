import cls from './Select.module.scss'

function Select({ children }) {
  return <select className={cls.select}>{children}</select>
}

export default Select
