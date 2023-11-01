import { useState } from 'react'
import cls from './FormInput.module.scss'

function FormInput({ name, label, defaultValue = '' }) {
  const [value, setValue] = useState(defaultValue)
  return (
    <div className={cls.input}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={'text'}
        value={value}
        name={name}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  )
}

export default FormInput
