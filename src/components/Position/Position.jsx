import cls from './Position.module.scss'
import PositionBody from '../Positions/PositionBody'
import { useState } from 'react'

function Position(props) {
  const [showBody, setShowBody] = useState(false)
  return (
    <div className={cls.position}>
      <div className={cls.position_container}>
        <div className={cls.position_info}>
          <div className={cls.lang}>
            <img src="/js.svg" alt="" />
          </div>
          <h3>Senior Front-end Developer</h3>
        </div>
        <div className={cls.position_options}>
          <button className={cls.save_btn}>Save changes</button>
          <div className={cls.show_body_toggle} onClick={() => setShowBody((prev) => !prev)}>
            <img src="/arrow.svg" alt="" />
          </div>
        </div>
      </div>
      {showBody && <PositionBody />}
    </div>
  )
}

export default Position
