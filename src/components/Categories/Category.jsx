import { memo, useState } from 'react'
import cls from './Navbar.module.scss'
import { motion, useAnimationControls } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import { useCategoryParams } from '../../hooks/useCategoryParams.js'

function Category({ lang, isSelect = false, onClickHandler }) {
  const controls = useAnimationControls()

  return (
    <motion.div
      animate={controls}
      transition={{ duration: 0.25 }}
      onClick={() => {
        controls.start({ x: [0, 5, 0] })
        onClickHandler()
      }}
    >
      <img
        src={`/${lang}.svg`}
        className={`${cls.category} ${isSelect ? cls.active : ''}`}
        alt={'navbar category'}
      />
    </motion.div>
  )
}

export default Category
