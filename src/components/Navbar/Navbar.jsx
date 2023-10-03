import cls from './Navbar.module.scss'
import Button from '../UI/Button/Button.jsx'
import Switcher from '../UI/Switcher/Switcher.jsx'
import { v4 } from 'uuid'
import Select from '../UI/Select/Select.jsx'

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
        <Select>
          <option value="1">PHP</option>
          <option value="2">JS</option>
          <option value="3">Lang</option>
          <option value="1">PHP</option>
          <option value="2">JS</option>
          <option value="3">Lang</option>
        </Select>
      </div>
      <div className={cls.auth_btns}>
        <Button type={'dark'}>Post a job</Button>
        <Button type={'light'}>Sign in</Button>
      </div>
    </nav>
  )
}

export default Navbar
