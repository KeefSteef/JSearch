import cls from './SallarySelect.module.scss'
import DoubleRange from '../UI/Range/DoubleRange'
import { useState } from 'react'
import Amount from '../Amount/Amount'

function SallarySelect(props) {
  const [range, setRange] = useState({ from: 0, to: 10000 })

  return (
    <div className={cls.sallary_select}>
      <DoubleRange start={range.from} end={range.to} setRange={setRange} />
      <div className={cls.amounts}>
        <Amount amount={range.from} label={'Min. amount'} />
        <Amount amount={range.to} label={'Max. amount'} />
      </div>
    </div>
  )
}

export default SallarySelect
