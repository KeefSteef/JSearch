import cls from './Badge.module.scss'

export default function Badge({ children, onlyView = false }) {
  return (
    <div className={cls.badge} onClick={(event) => event.stopPropagation()}>
      {children}
      {!onlyView && (
        <img src="/cross.svg" alt="badge cross" onClick={() => console.log('Badge!!!')} />
      )}
    </div>
  )
}
