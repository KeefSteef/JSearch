import { useState } from 'react'
import cls from './Switcher.module.scss'
import { motion } from 'framer-motion'

function Switcher({ variants = [], name }) {
  const [activeVariant, setActiveVariant] = useState(variants[0].id)

  return (
    <div className={cls.switcher}>
      <div className={cls.switcher_container}>
        {variants.map((item) => {
          const isActive = activeVariant === item.id
          return (
            <div key={item.id} onClick={() => setActiveVariant(item.id)}>
              {isActive && <motion.span layoutId={`${name}Switcher`} />}
              <p className={isActive ? cls.active : ''}>{item.label}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Switcher
