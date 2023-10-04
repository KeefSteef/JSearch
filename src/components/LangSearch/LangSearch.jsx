import Select from '../UI/Select/Select.jsx'
import LangOption from '../LangOption/LangOption.jsx'
import { v4 } from 'uuid'
import SearchLangInput from '../SearchLangInput/SearchLangInput.jsx'
import cls from './LangSearch.module.scss'
import Badge from '../UI/Badge/Badge.jsx'
import { useState, useRef } from 'react'

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
  const boxRef = useRef(null)
  return (
    <div ref={boxRef} onClick={(event) => event.stopPropagation()}>
      <div
        className="search_input"
        onClick={(event) => {
          if (!isTouched && !event.target.className.includes('badge')) {
            document.addEventListener('click', function clickHandler() {
              setTouched(false)
              this.removeEventListener('click', clickHandler)
            })
            setTouched(true)
          }
        }}
      >
        <SearchLangInput isTouched={isTouched} />
      </div>
      <div className={cls.search_box}>
        {isTouched && (
          <div className={cls.search_box_container}>
            <div className={cls.search_box_selected_langs}>
              <div className={cls.search_box_selected_langs_container}>
                <Badge>PHP</Badge>
                <Badge>JavaScript</Badge>
                <Badge>C#</Badge>
              </div>
            </div>
            <Select>
              {mockData.map((option) => {
                return (
                  <li key={v4()}>
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
