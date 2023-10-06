import Select from '../UI/Select/Select.jsx'
import LangOption from '../LangOption/LangOption.jsx'
import SearchLangInput from '../SearchLangInput/SearchLangInput.jsx'
import cls from './LangSearch.module.scss'
import Badge from '../UI/Badge/Badge.jsx'
import { useState } from 'react'
import { useOutsideClick } from '../../hooks/useOutsideClick.js'

const mockData = [
  {
    value: 'php',
    label: 'PHP',
  },

  {
    value: 'js',
    label: 'JavaScript',
  },
]

function LangSearch() {
  const [isTouched, setTouched] = useState(false)
  const ref = useOutsideClick(() => setTouched(false), 'badge')

  return (
    <div onClick={(event) => event.stopPropagation()}>
      <div ref={ref} onClick={() => setTouched(true)}>
        <SearchLangInput isTouched={isTouched} langsData={mockData} />
      </div>
      <div className={cls.search_box}>
        {isTouched && (
          <div className={cls.search_box_container}>
            <div className={cls.search_box_selected_langs}>
              <div className={cls.search_box_selected_langs_container}>
                {mockData.map((lang) => (
                  <Badge>{lang.label}</Badge>
                ))}
              </div>
            </div>
            <Select>
              {mockData.map((option) => {
                return (
                  <li key={option.value}>
                    <LangOption lang={option.value} onClickHandler={() => {}}>
                      {option.label}
                    </LangOption>
                  </li>
                )
              })}
            </Select>
          </div>
        )}
      </div>
    </div>
  )
}

export default LangSearch
