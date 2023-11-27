import cls from './Navbar.module.scss'
import Button from '../UI/Button/Button.jsx'
import Switcher from '../UI/Switcher/Switcher.jsx'
import LangSearch from '../LangSearch/LangSearch.jsx'
import LangSearchParamsConnect from '../LangSearchParamsConnect/LangSearchParamsConnect.jsx'

function Navbar() {
  return (
    <nav className={cls.nav}>
      <div className="switcher">
        <Switcher name={'offers'} variants={['Offers with sallary', 'All offers']} />
      </div>
      <LangSearchParamsConnect />
      <div className={cls.auth_btns}>
        <Button type={'dark'}>Post a job</Button>
        <Button type={'light'}>Sign in</Button>
      </div>
    </nav>
  )
}

export default Navbar
