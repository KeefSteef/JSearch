import cls from './Navbar.module.scss'
import Category from './Category.jsx'

function Categories({ categories, isCategoryLangSelect, categoryClickHandler }) {
  return (
    <ul className={cls.categories}>
      {categories.map((lang) => {
        return (
          <Category
            key={lang}
            lang={lang}
            isSelect={isCategoryLangSelect(lang)}
            onClickHandler={() => categoryClickHandler(lang)}
          />
        )
      })}
    </ul>
  )
}

export default Categories
