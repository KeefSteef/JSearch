import Select from '../UI/Select/Select.jsx'
import LangOption from '../LangOption/LangOption.jsx'
import SearchLangInput from '../SearchLangInput/SearchLangInput.jsx'
import cls from './LangSearch.module.scss'
import { useState } from 'react'
import { useOutsideClick } from '../../hooks/useOutsideClick.js'
import Badges from '../UI/Badge/Badges.jsx'

//TODO:  Create utils func for ReExp cases

const regexHandler = (value) => new RegExp(value.split('').join('.*'), 'i')

function LangSearch({ selectedLangs, langs, removeParam, optionClickHandler }) {
  const [value, setValue] = useState('')
  const { ref, isComponentVisible, setIsComponentVisible } = useOutsideClick(false)

  const regex = regexHandler(value)
  const options = langs.filter((option) => regex.test(option.label))

  return (
    <div ref={ref} onClick={(event) => event.stopPropagation()}>
      <div onClick={() => setIsComponentVisible(true)}>
        <SearchLangInput
          removeParam={removeParam}
          isTouched={isComponentVisible}
          langsData={selectedLangs}
          setValue={setValue}
        />
      </div>
      <div className={cls.search_box}>
        {isComponentVisible && (
          <div className={cls.search_box_container}>
            <div className={cls.search_box_selected_langs}>
              <Badges data={selectedLangs} onCloseHandler={removeParam} />
            </div>
            <Select>
              {options.map((option) => {
                return (
                  <LangOption
                    key={option.value}
                    lang={option.value}
                    onClickHandler={() => optionClickHandler(option.value)}
                  >
                    {option.label}
                  </LangOption>
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
