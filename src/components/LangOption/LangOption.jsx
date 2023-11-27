import cls from './LangOption.module.scss'

function LangOption({ lang, children, onClickHandler = () => {} }) {
  return (
    <li className={cls.lang} onClick={onClickHandler}>
      <img src={`/${lang}.svg`} alt="Lang option image" />
      <p>{children}</p>
    </li>
  )
}

export default LangOption
