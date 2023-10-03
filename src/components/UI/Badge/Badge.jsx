import cls from './Badge.module.scss'

export default function Badge({ children }) {
  return (
    <div className={cls.badge} onClick={(event) => event.stopPropagation()}>
        {children}
        <img src="/cross.svg" alt="badge cross" onClick={() => console.log('Badge!!!')} />
    </div>
  )
}
