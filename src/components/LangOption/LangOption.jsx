import cls from './LangOption.module.scss'

function LangOption({ lang, children, onClickHandler = () => {}}) {
  return (
    <div className={cls.lang} onClick={onClickHandler}>
        <img src={`/${lang}.svg`} alt="Lang option image" />
        <p>{children}</p>
    </div>
  )
}

export default LangOption