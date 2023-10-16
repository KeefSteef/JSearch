import cls from './Positions.module.scss'
import Position from './Position.jsx'

function Positions(props) {
  return (
    <section className={cls.positions}>
      {/*<div className={'info_title'}>*/}
      {/*  <h3>Positions</h3>*/}
      {/*</div>*/}
      <Position />
    </section>
  )
}

export default Positions
