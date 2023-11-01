import { useRef, useState } from 'react'
import cls from './Switcher.module.scss'
import { motion } from 'framer-motion'
import { v4 } from 'uuid'

const getVariantWithId = function createVariantObjectWithId(variants) {
  return variants.map((variant) => ({ label: variant, id: v4() }))
}

function Switcher({ variants = [], name }) {
  const { current: variantsWithId } = useRef(getVariantWithId(variants))
  const [activeVariant, setActiveVariant] = useState(variantsWithId[0].id)

  return (
    <div className={`${cls.switcher} switcher`}>
      <ul className={cls.switcher_container}>
        {variantsWithId.map((item) => {
          const isActive = activeVariant === item.id
          return (
            <li key={item.id} onClick={() => setActiveVariant(item.id)}>
              {isActive && <motion.span layoutId={`${name}Switcher`} />}
              <p className={isActive ? cls.active : ''}>{item.label}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Switcher
