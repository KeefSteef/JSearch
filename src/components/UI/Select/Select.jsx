import cls from './Select.module.scss'
import { useState } from 'react';
import SearchLangInput from '../../SearchLangInput/SearchLangInput';

function Select({ children }) {
  const [open, setOpen] = useState(true);
  return (
    <>
    {open && 
      <ul className={cls.select}>
        {children}
      </ul>
  }
    </>
  )
}

export default Select


