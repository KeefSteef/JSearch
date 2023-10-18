import cls from './Positions.module.scss'
import Position from '../Position/Position'

function Positions(props) {
  return (
    <section className={cls.positions}>
      <div className="info_title">
        <h3 className={cls.positions_title}>Positions</h3>
      </div>
      <div className={cls.positions_container}>
        <Position />
      </div>
      <div className={cls.add_position_btn}>
        <button>Add position</button>
      </div>
    </section>
  )
}

export default Positions
