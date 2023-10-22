import cls from './StackInput.module.scss'
import { useState } from 'react'

function StackInput(props) {
  const [value, setValue] = useState('')
  return (
    <input
      name="level"
      className={cls.stackInput}
      onChange={(event) => {
        const targetValue = +event.target.value > 100 ? '100' : event.target.value
        setValue(
          targetValue
            .replace(/[^0-9.]/g, '')
            .replace(/(\..*?)\..*/g, '$1')
            .replace(/^0[^.]/, '0')
        )
      }}
      value={value}
      maxLength={3}
      placeholder={'%'}
      type={'text'}
    />
  )
}

export default StackInput

//TODO: StackInput Add onChange props
