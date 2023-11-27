import cls from './SearchLangInput.module.scss'
import { useRef } from 'react'
import Badge from '../UI/Badge/Badge'
import Badges from '../UI/Badge/Badges.jsx'

export default function SearchLangInput({ removeParam, isTouched, langsData = [], setValue }) {
  const inputRef = useRef(null)

  return (
    <div className={cls.search_lang_container}>
      <div className={cls.search_lang_input}>
        {isTouched || (
          <div className={cls.badges}>
            <Badges
              short={langsData.length > 1}
              data={langsData.slice(0, 1)}
              onCloseHandler={removeParam}
            />
            {langsData.length > 1 && <Badge onlyView>+{+langsData.length - 1}</Badge>}
          </div>
        )}
        <input
          autoFocus={true}
          ref={inputRef}
          type="text"
          onChange={(event) => setValue(event.target.value)}
        />

        <img src="/search.svg" alt="Search icon" className={cls.search} />
      </div>
    </div>
  )
}
