import cls from './Badge.module.scss'
import { useState } from 'react'

export default function Badge({ children, onlyView = false, short = false, onClose }) {
  const [show, setShow] = useState(true)

  function onCrossHandler() {
    return onClose ? onClose() : setShow(false)
  }

  return (
    show && (
      <div
        className={`${cls.badge} ${onlyView ? cls.onlyView : ''}`}
        onClick={(event) => event.stopPropagation()}
      >
        <p className={` ${short ? cls.short : ''}`}>{children}</p>
        {!onlyView && <img onClick={onCrossHandler} src="/cross.svg" alt="badge cross" />}
      </div>
    )
  )
}
