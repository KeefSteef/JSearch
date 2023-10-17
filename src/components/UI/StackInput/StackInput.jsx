import cls from './StackInput.module.scss'
import { useState } from 'react'

function StackInput(props) {
  const [value, setValue] = useState('')
  return (
    <input
      className={cls.stackInput}
      onChange={(event) => setValue(event.target.value)}
      value={value}
      placeholder={'%'}
      type={'number'}
    />
  )
}

export default StackInput
