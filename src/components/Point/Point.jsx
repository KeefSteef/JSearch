import cls from './Point.module.scss'
import { useState } from 'react'
import { useOutsideClick } from '../../hooks/useOutsideClick.js'

function Point({ positions = [] }) {
  const [showPopup, setPopup] = useState(false)
  // const ref = useOutsideClick(() => setPopup(false), 'point')

  return (
    <div className={cls.point_container} onClick={(event) => event.stopPropagation()}>
      {showPopup && (
        <div ref={ref} className={cls.popup}>
          {positions.map((position) => {
            return (
              <div key={position.vacationId} className={cls.position}>
                <img src={`/${position.lang}.svg`} alt="" />
                <p>{position.name}</p>
              </div>
            )
          })}
        </div>
      )}
      <img src={`/${positions[0].lang}_marker.svg`} alt="" />
    </div>
  )
}

export default Point
