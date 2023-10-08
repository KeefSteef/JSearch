import cls from './SearchLangInput.module.scss'
import { useRef } from 'react'
import Badge from '../UI/Badge/Badge'

export default function SearchLangInput({ isTouched, langsData = [] }) {
  const inputRef = useRef(null)
  const [firstLang] = langsData

  return (
    <div className={cls.search_lang_container}>
      <div className={cls.search_lang_input}>
        {!isTouched && (
          <div className={cls.badges}>
            <Badge short={langsData.length > 1}>{firstLang.label}</Badge>
            {langsData.length > 1 && <Badge onlyView>+{1}</Badge>}
          </div>
        )}
        {isTouched && <input autoFocus={true} ref={inputRef} type="text" />}
        <img src="/search.svg" alt="Search icon" className={cls.search} />
      </div>
    </div>
  )
}
