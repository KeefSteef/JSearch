import cls from './Positions.module.scss'
import Position from './Position.jsx'

function Positions(props) {
  return (
    <section className={cls.positions}>
      <div className={cls.positions_container}>
        <Position />
      </div>
    </section>
  )
}

export default Positions
