import cls from './Point.module.scss'
import { useState } from 'react'
import { useOutsideClick } from '../../hooks/useOutsideClick.js'

function Point({ positions = [] }) {
  console.log(positions)
  const [showPopup, setPopup] = useState(false)
  const ref = useOutsideClick(() => setPopup(false), 'point')

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

      <svg
        className={`${cls.point} point`}
        viewBox="0 0 10 13"
        onClick={() => setPopup(true)}
        fill=""
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.99999 0C2.23882 0 0 2.18286 0 4.87501C0 7.56717 4.16671 13 5.00001 13C5.83335 13 10 7.56717 10 4.87501C10 2.18286 7.76118 0 4.99999 0ZM4.99999 8.12499C3.16162 8.12499 1.6667 6.6666 1.6667 4.87501C1.6667 3.08343 3.16162 1.62499 4.99999 1.62499C6.8384 1.62499 8.33327 3.08343 8.33327 4.87501C8.33327 6.6666 6.83843 8.12499 4.99999 8.12499Z"
          fill="#1C274C"
        ></path>
      </svg>
    </div>
  )
}

export default Point
