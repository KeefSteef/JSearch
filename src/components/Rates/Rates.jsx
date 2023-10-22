import cls from './Rates.module.scss'
import { useState } from 'react'
import Star from '../Star/Star'

function Rates({ variants = ['Nice to have', 'Beginner', 'Regular', 'Advanced', 'Master'] }) {
  const [level, setLevel] = useState(2)
  return (
    <div className={cls.rates}>
      <input type="hidden" name="rating" value={variants[level]} />
      <ul className={cls.stars}>
        {new Array(5).fill(null).map((_, index) => (
          <li className={cls.star} key={index + 1}>
            <Star setLevel={() => setLevel(index)} isActive={index <= level} />
          </li>
        ))}
      </ul>
      <p className={cls.level_text}>{variants[level]}</p>
    </div>
  )
}

export default Rates
