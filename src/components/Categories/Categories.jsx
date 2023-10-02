import cls from './Navbar.module.scss'
import Category from './Category.jsx'

function Categories() {
  return (
    <ul className={cls.categories}>
      {['html', 'js', 'php', 'ruby'].map((lang) => {
        return (
          <li key={lang}>
            <Category lang={lang} />
          </li>
        )
      })}
    </ul>
  )
}

export default Categories
