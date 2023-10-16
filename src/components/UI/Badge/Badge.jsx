import cls from './Badge.module.scss'

export default function Badge({ children, onlyView = false, short = false }) {
  return (
    <div
      className={`${cls.badge} ${onlyView ? cls.onlyView : ''}`}
      onClick={(event) => event.stopPropagation()}
    >
      <p className={` ${short ? cls.short : ''}`}>{children}</p>
      {!onlyView && <img src="/cross.svg" alt="badge cross" />}
    </div>
  )
}
