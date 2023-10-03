import cls from './SearchLangInput.module.scss'
import { useRef } from 'react';
import Badge from '../UI/Badge/Badge';

export default function SearchLangInput({ isTouched }) {
  const inputRef = useRef(null);

  return (
    <div className={cls.search_lang_container}>
        <div className={cls.search_lang_input} onClick={() => inputRef.current.focus()}>
            {!isTouched && <Badge>JavaScript</Badge>}
            <input ref={inputRef} type="text"/>
            <img src="/search.svg" alt="Search icon" />
        </div>
    </div>
  )
}
