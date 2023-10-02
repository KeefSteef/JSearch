import { useState } from 'react'
import cls from './Navbar.module.scss'
import { motion, useAnimationControls } from 'framer-motion'

function Category({ lang }) {
  const [isSelected, setIsSelected] = useState(false)
  const controls = useAnimationControls()

  return (
    <motion.div
      animate={controls}
      transition={{ duration: 0.25 }}
      onClick={() => {
        controls.start({ x: [0, 5, 0] })
        setIsSelected((prev) => !prev)
      }}
    >
      <img
        src={`/${lang}.svg`}
        className={`${cls.category} ${isSelected ? cls.active : ''}`}
        alt={'navbar category'}
      />
    </motion.div>
  )
}

export default Category
