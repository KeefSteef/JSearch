import cls from './Positions.module.scss'
import Position from './Position'

function Positions(props) {
  return (
    <section className={cls.positions}>
      <h3 className={cls.positions_title}>Positions</h3>
      <div className={cls.positions_container}>
        <Position />
        <Position />
      </div>
      <div className={cls.add_position_btn}>
        <button>Add position</button>
      </div>
    </section>
  )
}

export default Positions
