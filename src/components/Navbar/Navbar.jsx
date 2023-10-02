import cls from './Navbar.module.scss'
import Button from '../UI/Button/Button.jsx'
import Switcher from '../UI/Switcher/Switcher.jsx'
import { v4 } from 'uuid'

function Navbar() {
  return (
    <nav className={cls.nav}>
      <div className="switcher">
        <Switcher
          name={'offers'}
          variants={[
            {
              id: v4(),
              label: 'Offers with sallary',
            },
            {
              id: v4(),
              label: 'All offers',
            },
          ]}
        />
      </div>
      <div className={cls.auth_btns}>
        <Button type={'dark'}>Post a job</Button>
        <Button type={'light'}>Sign in</Button>
      </div>
    </nav>
  )
}

export default Navbar
